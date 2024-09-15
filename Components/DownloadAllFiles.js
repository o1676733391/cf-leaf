// components/DownloadAllFiles.js
import { useState, useEffect } from 'react';
import { storage } from '../firebaseConfig';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import styles from './DownloadAllFiles.module.css';

const DownloadAllFiles = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const storageRef = ref(storage);
        const result = await listAll(storageRef);
        const filePromises = result.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return { name: itemRef.name, url };
        });
        const files = await Promise.all(filePromises);
        setFiles(files);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFiles();
  }, []);

  const handleDownloadAll = async () => {
    const zip = new JSZip();
    const folder = zip.folder("files");

    const filePromises = files.map(async (file) => {
      const response = await fetch(file.url);
      const blob = await response.blob();
      folder.file(file.name, blob);
    });

    await Promise.all(filePromises);

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "files.zip");
  };

  return (
    <div className={styles.container}>
      <h2>Download Files</h2>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.fileList}>
        {files.map((file, index) => (
          <li key={index} className={styles.fileItem}>
            <a href={file.url} download={file.name} className={styles.fileLink}>
              {file.name}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={handleDownloadAll} className={styles.downloadButton}>
        Download All as Zip
      </button>
    </div>
  );
};

export default DownloadAllFiles;