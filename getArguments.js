const getArguments = () => {
  const args = process.argv;

  const breedName = args[2];

  return { breedName };
};

module.exports = {
  getArguments
};