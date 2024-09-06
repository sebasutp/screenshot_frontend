
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewScreenshotPlugin() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const screenshotData = {
      url: document.getElementById('urlInput').value,
      img: document.getElementById('screenshotImg').src
    };
    const url = `${import.meta.env.VITE_BACKEND_URL}/screenshots/`
    fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(screenshotData)
      })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            console.log(`Screenshot added successfully: ${data.external_id}`);
            const new_url = `/item/${data.external_id}`;
            console.log(`Redirecting ${new_url}`);
            navigate(new_url);
          });
        } else {
          console.error('Error sending screenshot:', response.statusText);
        }
      })
  };

  return (
    <div>
      <label>URL</label>
      <input 
        type="text"
        placeholder="Enter URL"
        id="urlInput"/>
      <div>
        <img id="screenshotImg" width="50%" />
      </div>
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default NewScreenshotPlugin;