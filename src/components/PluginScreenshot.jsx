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
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="relative w-3/4">
        <input 
          type="text" 
          id="urlInput" 
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-semibold text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          disabled 
        />
        <label 
          htmlFor="urlInput" 
          className="absolute text-md font-bold text-gray-600 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
            URL
        </label>
      </div>
     
      <div className="w-2/4 h-2/6 bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
        <img 
          id="screenshotImg"
          className="rounded-t-lg w-full h-3/4 object-cover" 
          alt="The image from the screenshot taken" 
        />
        <div className="p-6">
          <p className="mb-8 font-bold text-gray-700 dark:text-gray-400">
            Clicking the button, will add the screenshot to your list of screenshots.
          </p>
          <button
            onClick={handleSubmit}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Upload
            <svg 
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10">
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewScreenshotPlugin;