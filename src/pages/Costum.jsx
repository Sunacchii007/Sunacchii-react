import React from 'react'
import '../styles/costume.css'
import { useState } from 'react';

const Costum = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    }
    const cliksend = ()=>{
        alert('YOUR COSTUME HAS BEEN SEND');
    }
    return (
        <div className='costum'>
            <h2>DESCRIBE YOUR IDEA</h2>
            <div className="inp">
                <div className="input-container">
                    <input type="text" placeholder='YOUR NAME' />
                </div>
                <div className="input-container">
                    <input type="email" placeholder='YOUR EMAIL' />
                </div>
                <div className="input-container">
                    <input type="text" placeholder='DESCRIBE' />
                    <h4>upload your photo</h4>
                    <input type="file" onChange={handleImageChange} accept="image/*" />
                    {selectedImage && <img src={selectedImage} alt="Selected" className="selected-image" />}
                </div>
                <button type='reset' onClick={cliksend}>Send</button>
            </div>
        </div>
    )
}

export default Costum