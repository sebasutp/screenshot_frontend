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
    <div className="flex flex-col items-center justify-center">
      <div className="mb-12">
        <label htmlFor="urlInput" className="w-auto block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL</label>
        <input 
          type="text" 
          id="urlInput" 
          placeholder="Enter URL"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      
      <img 
          id="screenshotImg"
          className="h-auto max-w-lg mx-auto rounded-lg border-2 border-dashed border-blue-500 " 
          src="/docs/images/examples/image-1@2x.jpg" 
          alt="image description" 
      />
      
      <button 
        type="button" 
        onClick={handleSubmit}
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-12">
        Upload
      </button>
    </div>
  );
}

export default NewScreenshotPlugin;