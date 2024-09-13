// components/Upload.js
import { useState } from 'react';
import { storage } from '../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styles from './Upload.module.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [label, setLabel] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleUpload = async () => {
    if (file && label) {
      try {
        const fileName = `${label}_${file.name}`;
        const storageRef = ref(storage, fileName);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
        setError('');
      } catch (err) {
        setError('Failed to upload image');
      }
    } else {
      setError('Please select a file and a label');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Image Upload</h1>
      <input 
        type="file" 
        accept="image/*" 
        capture="camera" 
        onChange={handleFileChange} 
        className={styles.input}
      />
      <select onChange={handleLabelChange} className={styles.select}>
        <option value="">Select Label</option>
        <option value="label1">Rust</option>
        <option value="label2">Healthy</option>
        <option value="label3">Miner</option>
        <option value="label4">RSM</option>
        <option value="label5">Rot</option>
        <option value="label6">Anthracnose</option>
        
      </select>
      <button onClick={handleUpload} className={styles.button}>Upload</button>
      {error && <p className={styles.error}>{error}</p>}
      {imageUrl && <img src={imageUrl} alt="Uploaded" className={styles.image} />}
    </div>
  );
};

export default Upload;