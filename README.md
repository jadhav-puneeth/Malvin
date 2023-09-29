
# Mal-Vin 
A web application to detect the type of malware.

# Project Description
Cyber Security practice have been extensively seen recently, due to increase in malware attacks 
in the cyber world. These attacks causing irreversible damage to the corporate computer systems 
and to end user. Generally, standard signature-based detection software fails to identify this type 
of malware because they are changing shapes while propagating, wherein the signature gets 
impacted on every propagation.

There different types of malware like:

- #### TROJAN: misleads users of its true intent.
- #### WORMS: spreads copies of itself from computer to computer.
- #### ADWARE: hides on your device and serves you advertisements.
- #### SPYWARE: collects information 

This project allows users to upload an image and detect the type of malware and its family.
    

## Installation

Follow the below steps to run the app on your local server.

1.Clone the mentioned repository.(https://github.com/jadhav-puneeth/Mal-Vin.git) 
```bash
  git clone https://github.com/jadhav-puneeth/Mal-Vin.git
```
2.Run command `npm install` to install all the packages.

3.You need to install following modules in your local system using pip
```bash
  pip install tensorflow
  pip install numpy
  pip install pillow
```
4.Install mongoose and multer using the following commands
```bash
  npm i multer
  npm i mongoose
```
5.Create a folder with name `images` in statics folder to store uplodaded images.

6.Run the command `node index.js` to run on your local browser.

**Note:** increase the timer in setTimeout in control.js file if it is redirecting to upload page while detecting. 

    
## Contact

Puneeth Kumar Jadhav - jadhavpuneeth@gmail.com

project link -https://github.com/jadhav-puneeth/Mal-Vin 

