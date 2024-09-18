
import { useState } from 'react';

function NewScreenshot() {
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`submitting ${screenshotUrl}`);
  };

  const setImageFromFile = (imageFile) => {
    if (!imageFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setImage(base64Image);
    }
  }

  const setScreenshotMessage = (e) => {
    setImage(e.taget.value);
  }

  return (
    <div>
      <label>URL</label>
      <input 
        type="text"
        placeholder="Enter URL"
        id="urlInput" 
        value={screenshotUrl}
        onChange={(e) => {setScreenshotUrl(e.target.value)}} />
      <input
        type="hidden"
        id="imgContent"
        onChange={(e) => {setScreenshotMessage}} />
      <div>
        <img src={image} id="screenshotImg" width="50%" />
        <input type="file" onChange={(e) => setImageFromFile(e.target.files[0])} />
      </div>
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default NewScreenshot;