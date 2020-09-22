import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'


// Custom Hook que permite cargar una colección de Gifs dada una categoría
// Para acceder a la data, se usa la función getGifs definida en helpers que
// realiza un fetch a la API de gifs 
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        getGifs(category)
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
          
            })

    }, [category]);

    return state;

}