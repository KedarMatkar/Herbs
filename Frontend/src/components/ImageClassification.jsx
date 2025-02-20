import React from 'react'
import {useState} from 'react'
import "./ImageClassification.css"


const ImageClassification = () => {

    const [Image, setImage] = useState(null)

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if(file) {
            const ImageUrl = URL.createObjectURL(file);
            setImage(ImageUrl);
            console.log(ImageUrl);
        }
    };

  return (
    <div className='classify-container'>
      <div className="upload-container">
        <h1>Identify your Herb</h1>
        <p>Upload a picture to identify the herb</p>
        <input type="file" accept="image/*" onChange={handleImageUpload}/>
      </div>
      <div className='image-container'>
        {setImage ? (
            <img src={setImage} alt="image" />
        ) : (
            <p>No Image Uploaded</p>
        )}
      </div>
    </div>
  )
}

export default ImageClassification;
