// Require(s)
const request = require('request');
const { getArguments } = require('./getArguments');

// API endpoint/URL with 'sib' passed as the search query
let URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const { breedName } = getArguments();
URL += breedName;

// Fetch data from URL
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