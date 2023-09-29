import sys
from PIL import Image
import tensorflow as tf
import numpy as np


loaded_model=tf.keras.models.load_model('resnet50other.h5')
img=Image.open('images/'+sys.argv[1])
# img=Image.open('images/favicon.png');
if(img.size!=(224,224)):
    img=img.resize((224,224))
im1=np.asarray(img)
im1=np.resize(im1,(224,224,3))
image=np.expand_dims(im1,axis=0)
pred=loaded_model.predict(image)
labels=["Adposhel","Agent","Allaple","Amonetize","Androm","Autorun","BrowseFox","Dinwod","Elex","Expiro","Fasong","HackKMS","Hlux","Injector","InstallCore","MultiPlug","Neoreklami","Neshta","Regrun","Sality","Snarasite","Stantinko","VBA","VBKrypt","Vilsel",'-']
category=['Adware','Trojan','Worm','Adware','Backdoor','Worm','Adware','Trojan','Trojan','Virus','Worm','Trojan','Worm','Trojan','Adwate','Adware','Adware','Virus','Trojan','Virus','Trojan','Backdoor','Virus','Trojan','Trojan','Non-Malware']
print(labels[np.argmax(pred)],category[np.argmax(pred)])

