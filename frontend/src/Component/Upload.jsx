import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from "axios";
import Loader from './Loader';
import './Upload.css';

export default function Upload() {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [displayResult, setDisplayResult] = useState(false);
    const [malware, setMalware] = useState({});
    const [loading, setLoading] = useState(false);
    const [displayInput, setdisplayInput] = useState(true);
    const [displayUpload,setDisplayUpload]=useState(false)

    let handleOnChange = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setdisplayInput(false);
        setDisplayUpload(true);
        setImage(URL.createObjectURL(e.target.files[0]));
    };
    let submit = async () => {
        if (file != null) {
            setLoading(true);
            const formData = new FormData();
            formData.append("image", file);
            try {
                const res = await axios.post(import.meta.env.SERVER_URL, formData);
                setMalware({ type: res.data.type, class: res.data.class });
                setDisplayUpload(false);
                setDisplayResult(true);
                setLoading(false);
            } catch (error) {
                console.error("Error occurred during API call:", error);
                setLoading(false);
            }
        }
    };


    let submitAgain = () => {
        window.location.reload();
    };


    return (
        <div className='main' >
            <Navbar />
            <div>
                {displayInput && <form >
                    <input type="file" accept='image/*' onChange={handleOnChange} />
                    <p>Drag your files here or click in this area.</p>
                    <button onClick={submit} >Detect</button>
                </form>
                }
                <div className='image'>
                    {
                    displayUpload && image != null && 
                    <>
                        <div><img className='img-fluid' src={image} alt='error' width={400}></img></div>
                        <div><button className='detect_button' onClick={submit} >Detect</button>
                        </div>
                    </>
                    }
                    { loading && <div className='loading'><Loader /></div>}
                </div>


                {displayResult && 
                <div className='result'>
                    <table className='table table-dark table-bordered table-hover  w-50 '>
                        <thead>
                            <tr>
                                <th>Malware Class</th>
                                <th>Malware Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{malware.type}</td>
                                <td>{malware.class}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <button className='detect_button bg-dark' onClick={submitAgain}>Detect Again</button>
                    </div>
                </div>}

            </div>
        </div>
    );
}
