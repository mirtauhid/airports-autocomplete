module.exports = async function getAirports() {
  const axios = require('axios');

  try {
    const airports = await axios.get(
      'https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json'
    );
    return airports;
  } catch (error) {
    console.log(error);
  }

  return airports;
};
