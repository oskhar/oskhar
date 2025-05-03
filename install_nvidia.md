Berikut adalah panduan lengkap untuk menginstal dan mengonfigurasi NVIDIA GPU pada Arch Linux dengan Hyprland, menggunakan systemd-boot, dengan best practices dan optimasi performa:

### 1. Instalasi Driver NVIDIA
```bash
sudo pacman -S --needed \
nvidia-dkms \
nvidia-utils \
nvidia-settings \
nvidia-prime \
lib32-nvidia-utils \
vulkan-icd-loader \
lib32-vulkan-icd-loader \
opencl-nvidia
```

### 2. Konfigurasi DKMS dan Initramfs
Edit file `/etc/mkinitcpio.conf`:
```bash
MODULES=(nvidia nvidia_modeset nvidia_uvm nvidia_drm)
HOOKS=(base systemd autodetect modconf kms keyboard sd-vconsole block filesystems fsck)
```

Generate ulang initramfs:
```bash
sudo mkinitcpio -P
```

### 3. Konfigurasi Systemd-Boot
Edit entry bootloader di `/boot/loader/entries/arch.conf` tambahkan parameter kernel:
```bash
options root=PARTUUID=XXXX rw nvidia_drm.modeset=1 ibt=off rd.driver.blacklist=nouveau
```

### 4. Konfigurasi Environment Variables
Buat file `/etc/environment.d/nvidia.conf`:
```bash
__GLX_VENDOR_LIBRARY_NAME=nvidia
GBM_BACKEND=nvidia-drm
__GL_GSYNC_ALLOWED=0
__GL_VRR_ALLOWED=0
CLUTTER_BACKEND=wayland
WLR_NO_HARDWARE_CURSORS=1
LIBVA_DRIVER_NAME=nvidia
MOZ_ENABLE_WAYLAND=1
QT_QPA_PLATFORM=wayland
SDL_VIDEODRIVER=wayland
XDG_SESSION_TYPE=wayland
NVIDIA_DRIVER_HEAPDUMP_PATH=/tmp/nvidia-dump
```

### 5. Konfigurasi Hyprland
Tambahkan di `~/.config/hypr/hyprland.conf`:
```bash
env = LIBVA_DRIVER_NAME,nvidia
env = GBM_BACKEND,nvidia-drm
env = __GLX_VENDOR_LIBRARY_NAME,nvidia
env = WLR_NO_HARDWARE_CURSORS,1
env = WLR_DRM_NO_ATOMIC,1
```

### 6. Optimasi Power Management
Aktifkan service:
```bash
sudo systemctl enable nvidia-persistenced
sudo systemctl enable nvidia-powerd
```

Buat file `/etc/udev/rules.d/80-nvidia-pm.rules`:
```bash
ACTION=="add", SUBSYSTEM=="pci", TEST=="power/control", ATTR{vendor}=="0x10de", ATTR{power/control}="auto"
```

### 7. Konfigurasi Xorg (untuk XWayland)
Buat file `/etc/X11/xorg.conf.d/20-nvidia.conf`:
```bash
Section "Device"
    Identifier "Nvidia Card"
    Driver "nvidia"
    VendorName "NVIDIA Corporation"
    Option "AllowExternalGpus" "true"
    Option "RegistryDwords" "EnableBrightnessControl=1"
    Option "Coolbits" "28"
    Option "TripleBuffer" "true"
    Option "HardDPMS" "true"
    Option "DRI" "3"
EndSection
```

### 8. Optimasi Performa GPU
Buat script `/usr/local/bin/nvidia-perf`:
```bash
#!/bin/bash
nvidia-settings -a '[gpu:0]/GPUPowerMizerMode=1'
nvidia-settings -a '[gpu:0]/GPUFanControlState=1'
nvidia-settings -a '[gpu:0]/GPUGraphicsClockOffset[3]=100'
nvidia-settings -a '[gpu:0]/GPUMemoryTransferRateOffset[3]=1000'
```

### 9. Verifikasi Instalasi
Cek status driver:
```bash
nvidia-smi
glxinfo -B | grep -E "OpenGL vendor|OpenGL renderer"
modetest | grep -i nvidia
```

### 10. Optimus Manager (Hybrid Graphics)
Instal optimus-manager:
```bash
yay -S optimus-manager
```

Konfigurasi `/etc/optimus-manager/optimus-manager.conf`:
```bash
[optimus]
switching=hybrid
pci_power_control=yes
```

### 11. Fix Screen Tearing
Buat file `/etc/modprobe.d/nvidia.conf`:
```bash
options nvidia-drm modeset=1
options nvidia NVreg_UsePageAttributeTable=1
options nvidia NVreg_PreserveVideoMemoryAllocations=1
```

### 12. Suspend/Resume Fix
Buat service `/etc/systemd/system/nvidia-suspend.service`:
```bash
[Unit]
Description=NVIDIA suspend script
Before=sleep.target

[Service]
Type=simple
ExecStart=/usr/bin/nvidia-sleep.sh suspend

[Install]
WantedBy=sleep.target
```

### 13. Thermal Management
Monitor suhu GPU dengan:
```bash
watch -n 1 nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader
```

Untuk kontrol fan manual:
```bash
sudo nvidia-xconfig --cool-bits=4
```

### 14. Troubleshooting
- Jika terjadi kernel panic: tambahkan `ibt=off` di parameter kernel
- Jika blackscreen: tambahkan `nvidia.NVreg_EnableS0ixPowerManagement=1`
- Untuk Vulkan issues: install `vulkan-tools` dan test dengan `vkcube`

### 15. Update Maintenance
Setiap update kernel, jalankan:
```bash
sudo dkms autoinstall
sudo mkinitcpio -P
```

Dengan konfigurasi ini, Anda akan mendapatkan:
1. Performa GPU maksimal dengan overclocking aman
2. Manajemen daya optimal untuk laptop
3. Integrasi sempurna dengan Hyprland Wayland
4. Dukungan Vulkan dan OpenCL penuh
5. Thermal management yang baik

Pastikan untuk:
- Memantau suhu GPU secara berkala
- Menyesuaikan nilai overclock sesuai kemampuan hardware
- Melakukan benchmark secara berkala dengan `glmark2` atau `unigine-heaven`
