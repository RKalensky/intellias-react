import axios from 'axios';

export default async (apiRoute, queryObject = {}) => axios(apiRoute, { params: queryObject });
