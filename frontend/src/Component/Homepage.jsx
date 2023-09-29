import React from 'react'
import Navbar from './Navbar'
import getstart from '../images/getstart2.png';
import backImage from '../images/malware.webp';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div className='homepage'>
            <Navbar/>
            <div  className="w-50 homepage-info ">
                <div className='lead text-light align-self-center'>
                        <h3 className='display-4'>MAL-VIN</h3>
                        <p>
                        Malware is a harmful software that pretends to be a legitimate program to infiltrate the computer. It is installed in different ways, but the most common are a phishing email, fake installer, infected attachment, and phishing links.Hackers make malware presentable to convince users into installing them. Often, the users are unaware that the program is malware because it looks legitimate. Basically, that’s how malware gets installed on the computer.Once installed, malware hides in different folders in the computer. If it’s an advanced type of malware, it can directly access the operating system. Then it starts to encrypt files and record personal information.To detect malware, the process malware detection is created.
                        </p>
                </div>
                <div>
                    <button className='btn btn-transparent'>
                        <Link to='upload' className='nav-link nav text-light lead'>Get Started</Link>    
                    </button>
                </div>
            </div>
        </div>
    )
}
