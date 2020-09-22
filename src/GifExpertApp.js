import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    return (
        <>
           <h2>GifExpert App</h2>
           <AddCategory setCategories={ setCategories } />
           <hr />

           <ol>
               {
                   categories.map( category => (
                        <GifGrid                           
                            category={category}
                            key={category}
                        />
                   ))
               }
           </ol>
        </>
    )
}

export default GifExpertApp;

// const handleAdd = () => {
//     setCategories( [...categories, 'HunterXHunter'] );
//     // setCategories( cats => [ ...categories, 'HunterXHunter' ] );
// };