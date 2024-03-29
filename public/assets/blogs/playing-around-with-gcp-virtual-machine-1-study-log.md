---
title: 'Playing Around with GCP Virtual Machine #1 - Study Log'
excerpt: 'Study log of me playing around with GCP Virtual Machine'
date: '2023-07-26'
slug: 'playing-around-with-gcp-virtual-machine-1-study-log'
---

So, to build a solution implementation for my industrial internship (Kerja Praktik/KP) course, we decided to create our own development environment as we don't have any access to the company's source code (yet) and the database access we have only have read-only access. I decided to use this opportunity to play around and use GCP Virtual Machine as I have some free credits from trying the free trial and got some more by using organization email. I also used Database Instance using Cloud SQL, for us to do the actual work while I tinker around with the virtual machine.

# First Steps

After redeeming my Free Trial I got about $300 credits and $100 from Organization Free Trial Bonus.

On the welcome page, you can see quick access to the most used services, and also some recommended services. I decided to use Compute Engine as I want to create a virtual machine.

## Creating the Virtual Machine

Actually I'm not really new with cloud stuffs, as I have experience deploying apps using other platforms like Azure Static Web Apps, Heroku, Netlify, Vercel, and Render, mostly Platform as a Service (PaaS) solutions. But, I never really tried to use a virtual machine before, which is Infrastructure as a Service (SaaS). So, I decided to try it out. It seems interesting that I can have a full control of the machine, I can install anything I want, and it's really cheaper than PaaS solutions.

As it's just a dummy machine for development, I decided to use the cheapest machine type, `e2-micro` and choose the zone `asia-southeast2-a` as it's the closest zone to my location. I also choose the Debian 11 Bullseye as the OS.

## Connecting to the Virtual Machine

After creating the machine, I can see the machine's details, and also the SSH button to connect to the machine via their in-browser terminal. I can also see the machine's public IP address, which I can use to connect to the machine using SSH from my local machine. But it requires me to add my local machine's SSH key to the SSH Keys section in the machine's details page.

The steps was pretty straightforward, as I have generated my SSH key before using `id_ed25519` when I was using Git. I also have the `id_rsa` one, but for this, I choose `id_ed25519`. I just need to copy the public key from `~/.ssh/id_ed25519.pub` and paste it to the SSH Keys section. If you don't have any SSH key, you can generate one using `ssh-keygen` command.

After that, I can connect to the machine using SSH from my local machine.

```sh
ssh -i ~/.ssh/id_ed25519 <username>@<ip-address>
```

And now we're in the machine! I can do anything I want.

## Create a server

To test the machine, I decided to create a simple server using `apache2`. So I installed `apache2`, and enable the service. I also need to open the port 80 to allow HTTP traffic, and also enable HTTP traffic in the firewall settings.

```sh
sudo apt install apache2
sudo systemctl enable apache2
```

And now I can access the server in the browser using the machine's public IP address. It's still the default page, but it's working.

---

That's it for now, I'll continue this later. I plan to install some more things like Node, Nginx, MySQL, and Docker to prepare the environment needed for our implementation. Actually we can just implement the solution without deploying it to the virtual machine, but I want to use this opportunity to learn more about cloud stuffs, and also to have a better understanding of what is actually going on when we deploy our apps to the cloud.