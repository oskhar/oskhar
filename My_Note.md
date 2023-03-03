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


### Jadwal perkuliahan
Senin
- Aljabar Linear ( 10.15 - 12.45 )
- Praktikum Qiroah & Ibadah ( 13.00 - 14.40 )

Selasa
- Pemrograman lanjut ( 07.30 - 10.00 )
- Statistika Elementer ( 10.15 - 12.45 )
- Kalkulus 2 ( 13.00 - 15.30 )

Rabu
- Sistem Digital ( 07.30 - 10.00 )
- Bahasa Indonesia ( 10.15 - 12.45 )
- Islam & Ilmu Pengetahuan ( 13.00 - 15.30 )
