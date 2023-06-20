import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { orderBy, query, onSnapshot, collection } from 'firebase/firestore';


const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(collection(projectFirestore, collectionName), orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });

        // Cleanup function
        return () => unsubscribe();
    }, [collectionName]);
    // console.log(docs); working fine till here
    return docs;
};

export default useFirestore;
