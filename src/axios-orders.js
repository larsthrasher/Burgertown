import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgertown-5af90.firebaseio.com/'
});

export default instance;
