import React, { useState, useEffect } from 'react';
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
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching screenshot details:', error);
      });
  }, [id]);

  return (
    <div>
      {is_loading ? (
        <img src='/assets/loading.gif' alt="Loading..." />
      ) : (
        <div>
          <a href={screenshot.url}>{screenshot.url}</a>
          <br />
          <img src={screenshot.img} width="50%" />
        </div>
      )}
    </div>
  );
}

export default Item;