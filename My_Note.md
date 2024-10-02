## Command on linux

#### 0 ) Config nvidia hardware

###### a. adding ibt parameter

Open file `/etc/default/grub` use code editor,
add parameter `ibt=off` inside `GRUB_CMDLINE_LINUX_DEFAULT`

> **Note**: Don't remove anything from there!

###### b. enable early loading

Open file `/etc/mkinitcpio.conf` use code editor,
edit paramater in `MODULES` like this `MODULES=(i915 nvidia nvidia_drm nvidia_uvm nvidia_modeset)`

save and update:

```
~$ sudo mkinitcpio -P
```

###### c. update system

```
~$ sudo pacman-mirrors --fasttrack 5 && sudo pacman -Syyu
```

###### d. install nvidia and restart

```
~$ sudo mhwd -a pci nonfree 0300
```

And restart now !

#### 1 ) Change powerline

```
~$ p10k configure
```

#### 2 ) Change grub option

```
~$ git clone https://github.com/vinceliuice/grub2-themes.git
~$ cd grub2-themes
~$ ./install.sh -t vimix -i white
```

#### 3) Wireless screen monitor

```
~$ pamac build miraclecast-git
```

##### A. Steps to use it as sink

###### a. shutdown wpa_supplicant and NetworkManager

```
~$ systemctl stop NetworkManager.service
~$ systemctl stop wpa_supplicant.service
```

###### b. launch wifi daemon

```
~$ sudo miracle-wifid &
```

###### c. launch sink control (your network card will be detected. here 3)

```
~$ sudo miracle-sinkctl
[ADD]  Link: 3
```

###### d. run WiFi Display on link:

```
> run 3
```

###### e. Pair your machine with other miracast device (mirroring)

###### f. See your screen device on this machine

##### B. Steps to use it as peer

###### a. Repeat steps 1 and 2 from "use as sink"

###### b. launch wifi control

```
~$ sudo miracle-wifictl
```

###### c. Enable visibility for other devices

###### d. Locate them using scanning

```
> p2p-scan
```

###### e. Apart from list, or show info with peer &lt;mac&gt; there's nothing useful here by now. For a Q&D see [Using as peer](https://github.com/albfan/miraclecast/issues/4)

#### 4) Change php version

###### a. Instal php version and php apache with same version

example

```
~$ sudo pacman -S php7 php7-apache
```

###### b. Change default php version

#### 5) Mounting disk error (Arch)

###### a. Cek disk yang tersedia

```
~$ lsblk -f
```

###### b. Melakukan pengecekan disk

```
~$ sudo fsck -t <tipe-sistem-file> /dev/nvme0n1p8
```

###### c. Lihat nomor blok

```
~$ sudo dumpe2fs -h /dev/nvme0n1p8
```

###### d. Jika disk masih bermasalah, coba perbaiki untuk format NTFS

```
~$ sudo ntfsfix /dev/nvme0n1p8
```

###### e. Coba mount disk secara manual

```
~$ sudo mount /dev/nvme0n1p8 /mnt
```

#### 6) Window Rounded KDE (Arch)

###### a. Install KDE-Rounded-Corner

```
git clone https://github.com/matinlotfali/KDE-Rounded-Corners
cd KDE-Rounded-Corners
mkdir build
cd build
cmake .. --install-prefix /usr
make
sudo make install
```

###### b. Aktifkan KDE-Rounded-Corner

```
sh ../tools/load.sh
```

#### 7) Best window manager: Krohnkite

#### 8) Change default dark theme gnome

###### a. Jalankan perintah tersebut untuk mengubah theme

```
~$ gsettings set org.gnome.desktop.interface gtk-theme 'Adwaita-dark'
~$ gsettings set org.gnome.shell.extensions.user-theme name 'Adwaita-dark'
```

###### b. Replace file gtk-2.0 & gtk-3.0 pada folder /etc

###### c. Replace file gtk-2.0 & gtk-3.0 pada folder /.config

###### d. buat file /etc/profile.d/gnome-dark-theme.sh dan ketikan ini

```
export GTK_THEME=Nama-Theme
```
