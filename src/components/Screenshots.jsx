import { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import CardScreenshot from './CardScreenshot';

function Screenshots() {
  const [screenshots, setScreenshots] = useState([]);
  const [is_loading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    setIsLoading(true);
    const url = `${import.meta.env.VITE_BACKEND_URL}/screenshots/`;
    console.log(token)  
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Use the fetched screenshot data here
        setScreenshots(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching screenshot details:', error);
      });
  }, []);

  console.log("estos es",screenshots)
  
  return (
    <div>
      {is_loading ? (
        <img src='/assets/loading.gif' alt="Loading..." />
      ) : (
        <div>
          <NavMenu />
          <div className="flex flex-col items-center justify-center mt-24">
            <p className="text-xl font-semibold text-gray-700 mb-16">Number of screenshots: {screenshots.length}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {screenshots.map((screen, i) => (
                <CardScreenshot 
                  key={i}
                  image={screen.img}
                  urlImage={screen.url}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Screenshots;