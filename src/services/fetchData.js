import axios from 'axios';

const APIUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PROD_BACKEND_URL;

export default async (apiRoute, queryObject = {}) => axios(`${APIUrl}${apiRoute}`, { params: queryObject });
