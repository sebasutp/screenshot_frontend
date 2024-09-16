import PropTypes from 'prop-types';

function Card({ urlImage, image }) {
  return (
    <div>
      <div className="w-72 h-72 bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
        <img className="rounded-t-lg w-full h-3/4 object-cover" src={image} alt="The image from the screenshot taken" />
        <div className="p-5">
          <a 
            href={urlImage} 
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            target="_blank" 
            rel="noopener noreferrer"
            >
            Source Link
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  urlImage: PropTypes.string,
  image: PropTypes.string,
};

export default Card