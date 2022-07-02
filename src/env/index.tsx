// import dotenv from 'dotenv'
// dotenv.config()
const config = {
	API_KEY: process.env.REACT_APP_BASE_API_KEY || '',
	BACKEND_BASE_URL: process.env.REACT_APP_BACKEND_BASE_URL || '',
	ENV: process.env.REACT_APP_NODE_ENV || '',
};

export default config;
export { config };
