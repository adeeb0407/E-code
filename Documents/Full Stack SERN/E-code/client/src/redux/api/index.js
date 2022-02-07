import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }

//   return req;
// });

export const allStudents = () => API.get('/students');

export const allCourses = () => API.get('/courses');
export const courseById = (id) => API.get(`/courses/${id}`);

export const allTrainers = () => API.get('/trainers');

export const loginStudent = (contact) => API.post('/students/login', {contact : contact});
export const loginTrainer = (contact, fullname) => API.post('/trainers/login', {contact : contact, fullname : fullname});
