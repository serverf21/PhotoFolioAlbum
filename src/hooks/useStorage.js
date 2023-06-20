import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = ref(projectStorage, file.name); //tosave
        const collectionRef = collection(projectFirestore, 'images'); //toget

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snap) => {
            let percentage = Math.round(snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            const createdAt = timestamp;
            await addDoc(collectionRef, { url, createdAt });
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error };
}

export default useStorage;