import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatComponent: React.FC = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetchCatImage();
    }, []);

    const fetchCatImage = async () => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            const data = response.data[0];
            setImageUrl(data.url);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={fetchCatImage}>Actualizar</button>
            <h1>Imágenes de gatos</h1>
            {imageUrl && <img src={imageUrl} alt="Cat" />}
        </div>
    );
};

export default CatComponent;
