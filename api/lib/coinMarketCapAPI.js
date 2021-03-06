//http://coinmarketcap.com/api/

const axios = require('axios');

module.exports = function(){
    const coinMarketCapURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=200'
    function callCMC() {
        axios.get(coinMarketCapURL)
            .then((res) => {
                io.emit('altcoins', res.data)
            })
            .catch((err) => {
                //need to figure out better error handling
                console.log(err)
            });
    }

    setInterval(function(){
        callCMC();
//    m    s    ms
    },3 * 60 * 1000)
}