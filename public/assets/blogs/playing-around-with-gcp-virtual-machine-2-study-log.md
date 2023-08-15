---
title: 'Playing Around with GCP Virtual Machine #2 - Study Log'
excerpt: 'Next part of my study log playing around with GCP Virtual Machine.'
date: '2023-07-26'
slug: 'playing-around-with-gcp-virtual-machine-2-study-log'
---

It's nice to experience firsthand  the 'scalability' principle of a cloud service, as it's possible for me to change my machine configuration, either scaling-up or scaling-down, even after I created the instance. I can rename the instance, change the machine type , the boot disk, and the network interface. I can also add a GPU to my instance, which is pretty cool. I just have to stop the machine first before I can change the configuration.

I realized that the public IP address of a VM could change when it restarts. I wanted to reserve the IP address, but it seems that I didn't really need it because I only use the VM for development purposes. But it's good to know that it's possible to reserve an IP address.

## Installing development tools

Beside Apache, I decided to also install Node.js, Nginx, MariaDB, and Docker. The installation process was pretty straightforward, as it's actually just installing in a Debian machine. I also installed `git` as I need them to do my work.

### Node.js

I used [`nvm`](https://github.com/nvm-sh/nvm) for the installation of Node.js and npm and use the LTS version.

### MariaDB

I install MariaDB from `mariadb-server` and `mariadb-client` packages. Then I run `mysql_secure_installation` to secure the installation. I set the root password, remove anonymous users, allow root login remotely, remove test database and access to it, and reload privilege tables.

Now I can access database from MariaDB, but now I'm still figuring out how to safely expose the MariaDB connection so that I can access it from outside of the VM. Will continue later!