import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Item() {
  const { id } = useParams();
  const [screenshot, setScreenshot] = useState({});
  const [is_loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = `${import.meta.env.VITE_BACKEND_URL}/screenshots/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Use the fetched screenshot data here
        setScreenshot(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching screenshot details:', error);
      });
  }, [id]);

  return (
    <div>
      {is_loading ? 
        (
          <img src='/assets/loading.gif' alt="Loading..." />
        ) : 
        ( 
          <div className="flex flex-col items-center justify-center mt-8 px-8">
            <div className="w-fit">
              <p className="text-gray-700 dark:text-gray-400 text-lg font-semibold">
                From this link was taken the screenshot 
                <a 
                  href={screenshot.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline ml-2"
                  > {screenshot.url}
                </a>
              </p>
            </div>           
            <div className="w-fit h-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
              <img 
                className="rounded-t-lg" 
                src={screenshot.img}
                alt="The image of the screenshot taken" 
              />
            </div>
            <div className="p-5 w-3/6 h-1/3">
                {/* Form to write a comment about the screenshot */}
                <form>
                  <div className="mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                      <label 
                        htmlFor="comment" 
                        className="sr-only">
                          Your comment
                      </label>
                      <textarea 
                        id="comment" 
                        rows="4" 
                        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
                        placeholder="Write a comment..." 
                        required >
                      </textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                      <button 
                        type="submit" 
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-indigo-900 hover:bg-indigo-800">
                          Send comment
                      </button>
                      <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                        <button 
                          type="button" 
                          className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg 
                            className="w-4 h-4" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 12 20">
                            <path 
                              stroke="currentColor" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                          </svg>
                          <span className="sr-only">Attach file</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        )
      }
    </div>
  );
}

export default Item;