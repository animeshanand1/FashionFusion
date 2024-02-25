import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Account() {
    const [image, setImage] = useState(null);
    const token = sessionStorage.getItem('token');
    console.log('token',token);
    useEffect(()=>{
      if(token){
      const response=axios.get('http://localhost:5000/user/fetch-user/65db01b360f56e96dd3b5cd0')
      console.log('response',response);
    }
    },[])

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
    
      reader.onload = () => {
        const base64Data = reader.result.split(',')[1]; 
        console.log('64',base64Data);
        setImage(base64Data);
      };
    
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
      reader.readAsDataURL(file); 
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const id = '65db01b360f56e96dd3b5cd0';
        const response = await axios.post(`http://localhost:5000/user/updateAccount/${id}`, { image }, {
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
           
        </div>
    )
}

export default Account