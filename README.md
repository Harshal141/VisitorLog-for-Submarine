<div align="center">
<h1>Test15</h1>
<p>Android Web Hosting</p>
<a href="https://github.com/Harshal141/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?lines=Node-Project;Android;Termux;Web-Hosting&center=true&width=500&height=50"></a>
</div>

- A lightweight visitors log book which connects various mobile devices without
internet and keeps track of the people currently boarded on a submarine.
- The major challenges included, connecting and sending data through those
devices over an extended range and thick walls, creating a server light enough to
be able to run on a hand held device with very limited resources and completing it
within 10 days.
- Built using HTML, CSS, JS, ExpressJS and NodeJS. On the tablet, Termux Command
Line Interface was setup to host the server.

<br />

<img align="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLp-Sd3erhU7-mawEusETLZ-QKhZ0qTGv19w&usqp=CAU">

## Setup Termux
> **NOTE** Install Termux from f-droid not Google Play store

### Termux Packages
Setup Package installer And Install Node.
```
pkg update && pkg upgrade
pkg install nodejs
```

### Setup Project
To accesing android local storage use following code in termux.
```
termux-setup-storage
```
Now download the current project code to the android device then `cd storage` and navigate to the code folder. 
Run `npm install` to install all the dependencies of the project.
Run `node index` to run the server on android device aka `HOST`.
Open local webBrowser and run the site.
```
http://localhost:5000
```

### Accesing Site on device.
> Make sure Android device is connected to `HOST` hotspot.

Open device properties and find the `GATEWAY IP` in wifi settings.
```
http://<GATEWAY_IP>:5000
```
This link will open the page in the client device as well.
> **PS**: This project is complicated but only can we had no LAN or Internet availability at the site.

<br />

# Video Sample

<h2 align="Right">Host Device</h2>


https://user-images.githubusercontent.com/91362856/202469653-ee3bb88d-37aa-4ce6-a6c4-5c95580aefbd.mp4

<h2 align="Right">Client Device</h2>

https://user-images.githubusercontent.com/91362856/202469767-67461a35-208f-4766-ace4-4ee4546e1157.mp4

