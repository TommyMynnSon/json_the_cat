// Require(s)
const request = require('request');

// Fetch data from URL and pass it to the provided callback function
const fetchBreedDescription = (breedName, callback) => {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(URL, (error, response, body) => {
    // If request returned an error
    if (error) {
      callback(error, null);

      return;
    }

    const data = JSON.parse(body);

    // If request did not return an error AND breedName is an invalid breed
    if (data.length === 0) {
      callback(`Search query for '${breedName}' not found!`, null);

      return;
    }

    // If request did not return an error and breedName is a valid breed
    callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};