import axios from "axios";
import config from '../configs.json'

export const getImages = ({ limit = 10, page = 1, categoryId = '' }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${config['API']}/images/search?limit=${limit}&page=${page}&category_ids=${categoryId}`);
      dispatch({
        type: 'GET_IMAGES', payload: data
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const showMoreImages = ({ limit = 10, page = 1, categoryId = '' }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${config['API']}/images/search?limit=${limit}&page=${page}&category_ids=${categoryId}`);
      dispatch({
        type: 'SHOW_MORE', payload: data
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${config['API']}/categories`);
      dispatch({
        type: 'GET_CATEGORIES', payload: data
      });
    } catch (err) {
      console.log(err);
    }
  }
};

