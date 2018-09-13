const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI( direccion );

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyD8bTb0B6e-gnz9F3lbkAC8Ak5MIjatrJY`)

    if(resp.data.status=== 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la búsqueda`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;
    //console.log(JSON.stringify(resp.data, undefined, 2));
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}