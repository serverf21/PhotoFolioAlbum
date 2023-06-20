import React from 'react';
import useFirestore from "../hooks/useFirestore"
import { motion } from 'framer-motion';
import { doc, deleteDoc } from "firebase/firestore";
import { projectFirestore } from '../firebase/config';

const ImageGrid = ({ setSelectedImg }) => {
    const docs = useFirestore("images");
    console.log(docs);
    const i = 1;
    const deleteSelected = async (id) => {
        await deleteDoc(doc(projectFirestore, "images", id));
    };
    return (
        <div className="img-grid">
            {docs && docs.map((doc, index) => (
                <motion.figure className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }} s
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                    <motion.figcaption>image: {i + index}</motion.figcaption>

                    <motion.p
                        onClick={() => deleteSelected(doc.id)}>
                        X
                    </motion.p>
                </motion.figure>
            ))}
        </div>
    )
}

export default ImageGrid;