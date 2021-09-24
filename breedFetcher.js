// Require(s)
const request = require('request');
const { getArguments } = require('./getArguments');

// Fetch data from URL
const fetchBreedDescription = (breedName, callback) => {
  // API endpoint/URL with value of breedName passed as the search query
  let URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const { breedName } = getArguments();
  URL += breedName;

  request(URL, (error, response, body) => {
    if (error) {
      console.log('error:', error);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log(`Search query for breed '${breedName}' not found!`);
      process.exit();
    }

    console.log(data[0].description);
  });
}