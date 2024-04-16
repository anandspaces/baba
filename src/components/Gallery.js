import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

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

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-archive">
        {/* Render each image */}
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`post ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
