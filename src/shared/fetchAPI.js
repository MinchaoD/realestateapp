export const request = require('request');

const options = {
  method: 'GET',
  url: 'https://real-estate-usa.p.rapidapi.com/api/v1/properties',
  qs: {postal_code: '94105', offset: '0', limit: '200'},
  headers: {
    'x-rapidapi-key': '90c32ee4dfmsh4fb639c105f3c53p17b70ejsn4202beb6b2c8',
    'x-rapidapi-host': 'real-estate-usa.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log("body"+body);
});


// export const fetchHouses = () => {    
  
//         return fetch("https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200", {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-key": "90c32ee4dfmsh4fb639c105f3c53p17b70ejsn4202beb6b2c8",
//                 "x-rapidapi-host": "real-estate-usa.p.rapidapi.com"
//             }
//         })
//         .then(response => {
//             console.log("response"+response);
//         })
//         .catch(err => {
//             console.error(err);
//         })}
