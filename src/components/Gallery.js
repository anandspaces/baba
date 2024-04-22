import React, { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';

export default function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to fetch all image URLs
    const fetchImageUrls = async () => {
      try {
        // Get a reference to the storage directory containing the images
        const imagesRef = ref(storage, 'images');

        // List all files in the directory
        const files = await listAll(imagesRef);

        // Array to store image URLs
        const urls = [];

        // Loop through each file and get its download URL
        for (const file of files.items) {
          const url = await getDownloadURL(file);
          urls.push(url);
        }

        // Update the state with the image URLs
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching image URLs:', error);
      }
    };

    // Call the function to fetch image URLs
    fetchImageUrls();
  }, []); // Run this effect only once, when the component mounts

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container">
      <h2 className="text-center mt-3 mb-4">Image Gallery</h2>
      {imageUrls.length > 0 && (
        <div className="position-relative">
          <button onClick={handlePrev} className="btn btn-outline-secondary position-absolute top-50 start-0 translate-middle-y" style={{ zIndex: '1' }}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <img src={imageUrls[currentIndex]} alt={`Images ${currentIndex + 1}`} className="img-fluid rounded" style={{ maxHeight: '300px', width: '100%' }} />
          <button onClick={handleNext} className="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y" style={{ zIndex: '1' }}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

