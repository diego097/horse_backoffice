const axios = require('axios');

const horseCtrl = {}

horseCtrl.makeRequest = async (req, res) => {
    try {
        const data = req.body;
        const config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        let detail = new URLSearchParams();
        for(let prop in data){
            detail.append(prop, data[prop]);
        }

        const response = await axios.post("https://api.lottohipico.com", detail, config);
        res.send(response.data);

    } catch (e) {
        res.send(e);
        throw e;
    }
}

module.exports = horseCtrl;