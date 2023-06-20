import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    console.log(file);

    const { progress, url, error } = useStorage(file);
    console.log(progress, url, error);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <div>
            <motion.div className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: progress + '%' }}
            ></motion.div>
        </div>
    );
}

export default ProgressBar;