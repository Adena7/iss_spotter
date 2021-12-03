const request = require('request');

const fetchMyIP = function(callback) { 
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);

  });// use request to fetch IP address from JSON API
};
  

const fetchCoordsByIP = function(ip, callback) {
  request('http://ip-api.com/json/198.161.51.162', (error, response, body) => {
      
    if (error) {
      callback(error, null);
      return;
    }
  
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body.query}`), null);
      return;
    }
  
    const { latitude, longitude } = JSON.parse(body);
    callback(null, {latitude, longitude});
  
  
  });
  
};
module.exports = {fetchMyIP, fetchCoordsByIP};
