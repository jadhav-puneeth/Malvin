const multer=require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload=multer({storage:storage}).single("image");
module.exports=upload;