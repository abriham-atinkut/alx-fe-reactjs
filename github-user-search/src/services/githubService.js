import axios from "axios";

const fetchUserData = async (searchTerm) => {
  try {
    const url = `https://api.github.com/users/${searchTerm}`;
    const response = await axios.get(url);
    const userData = response.data;
    return userData;
    
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default fetchUserData;

