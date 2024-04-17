import axios from "axios";

async function url(e) {
    try {
      const response = await axios.get(e);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
export {url}