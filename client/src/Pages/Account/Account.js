import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Account() {
    const [image, setImage] = useState(null);
    useEffect(()=>{
      const response=axios.get('http://localhost:5000/user/fetch-user/65db01b360f56e96dd3b5cd0')
      console.log('response',response);
    },[])

    const handleImageChange = (event) => {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append('image', image);
          const id = '123'; 
          const response = await axios.post(`http://localhost:5000/user/updateAccount/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Image uploaded successfully:', response.data);
        } catch (error) {
          alert('Something went wrong');
          console.error('Error uploading image:', error);
        }
      };
      
    return (
        <div className='account-page'>
            <h2>Update Profile Image</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="imageInput">Choose Image:</label>
                    <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit">Update Image</button>
            </form>
            {image && (
                <div>
                    <h3>Preview:</h3>
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Preview"
                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                    />
                </div>
            )}
        </div>
    )
}

export default Account