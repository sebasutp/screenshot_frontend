import React, { useState, useEffect } from 'react';

function Screenshots() {
  const [screenshots, setScreenshots] = useState({});
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

  return (
    <div>
      {is_loading ? (
        <img src='/assets/loading.gif' alt="Loading..." />
      ) : (
        <div>
          <p>Number of screenshots: {screenshots.length}</p>
        </div>
      )}
    </div>
  );
}

export default Screenshots;