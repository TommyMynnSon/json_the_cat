// Require(s)
const request = require('request');

// Fetch data from URL and pass it to the provided callback function
const fetchBreedDescription = (breedName, callback) => {
  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(URL, (error, response, body) => {

    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log(`Search query for breed '${breedName}' not found!`);
      process.exit();
    }

    callback(error, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};