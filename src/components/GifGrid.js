import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({ category }) => {

    // Llamada al custom Hook
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">

                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img } />
                    ))
                }

            </div>
        </>
    )
}

export default GifGrid;


//  images.map( ({ id, title }) => (
//         <li key={ id }>{ title }</li> )