import config from 'env';
import axios from 'axios';

const baseAxios = axios.create({
	baseURL:config.BACKEND_BASE_URL
});

export { baseAxios };

export default  Object.freeze({baseAxios})