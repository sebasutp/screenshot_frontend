import { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import CardScreenshot from './CardScreenshot';
import { useNavigate } from 'react-router-dom';

function Screenshots() {
  const [screenshots, setScreenshots] = useState([]);
  const [is_loading, setIsLoading] = useState(false);
  
  const navigate = useNavigate()
  
  const loadScreenshots = (token) => {
    setIsLoading(true);
    const url = `${import.meta.env.VITE_BACKEND_URL}/screenshots/`;
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
      })
      .catch((error) => {
        console.error('Error fetching screenshot details:', error);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log("Token not found redirecting to /login")
      navigate("/login")
    } else {
      loadScreenshots(token)
    }
  }, [navigate]);
    
  return (
    <div>
      {is_loading ? 
        (
          <img src='/assets/loading.gif' alt="Loading..." />
        ) : 
        (
          <div>
            <NavMenu />
            <div className="flex flex-col items-center justify-center mt-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {screenshots.map((screen, i) => (
                  <CardScreenshot 
                    key={i}
                    screenshot={screen}
                  />
                ))
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Screenshots;