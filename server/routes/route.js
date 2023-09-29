const express = require('express');
const router = express.Router();
const upload = require('../database/upload');
const ImageModel = require('../database/model');
const { spawn } = require('child_process');

let detectImageType = (fname) => {
    return new Promise((resolve, reject) => {
        let dataFromPython;
        const childpython = spawn('python', ['python.py', fname])
        childpython.stdout.on('data', (data) => {
            dataFromPython= data.toString();
            console.log(`stdout: ${data}`);
        }),
        childpython.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`)
        })
        childpython.on('exit',(data)=>{
            resolve(dataFromPython);
        })
    })

}

router.post('/upload', upload, async (req, res) => {
    const newImage = new ImageModel({
        name: req.file.filename,
        image: {
            data: req.file.filename,
            contentType: 'image/png'
        }
    })
    await newImage.save().then(() => { console.log("image uploaded in db");}).catch((err) => { console.log(err); });
    detectImageType(req.file.filename).then((result)=>{
        result=result.split(' ');
        res.send({type:result[0],class:result[1]});
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router