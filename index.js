// Require(s)
const { getArguments } = require('./getArguments');
const { fetchBreedDescription } = require('./breedFetcher');

const { breedName } = getArguments();

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});