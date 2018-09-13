const axios = require('axios');


const getClima = async (lat, lng) => {

    let encodedLat = encodeURI(lat);
    let encodedLng = encodeURI(lng);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodedLat}&lon=${encodedLng}&units=metric&appid=071fba56c28a85278702b61ca2b626e6`)

    let temp = resp.data.main.temp;
    return temp;
}

module.exports = {
    getClima
}