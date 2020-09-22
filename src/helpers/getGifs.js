// Como esta función es async no devuelve los gifs, solo devuelve una promesa que
// resuleve la colección de las imagenes

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=hzCAio3c0BhjBYIPhRDD8arH1EyKJKfM`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}
