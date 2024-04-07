import { create } from 'apisauce'

const api = create({ // all the config of the api is creating here
    baseURL: 'http://172.20.10.7:1337/api',
    headers: { 
      "X-API-KEY":"d2e7692d281a5980d7a6be203abcc4e8476f4af9459b4d5927ad3267db53a914f11d069b9312ebf2d3355bfbcea49b782048fd81743366a38d3f11c8c044705932e6e68f741f53f2422aae72364564028960fc3c8e14b332f5f5bced71464802ffcd7f867d5cce3e918e973b038f516a03a1f387e49a36f775daa4bf1f7c0381" 
    },
})
const getSlider = () => api.get('/sliders?populate=*'); // here we are fetching the slider data from the api the point to be noted here is that we are using the populate query parameter to get the data of the related fields
const getCategories = () => api.get('/categories?populate=*');
const getEvents = () => api.get('/events?filters[Premium][$eq]=true&populate=*');
const getEventsByCategory = (category) => api.get('/events?filters[categories][Name][$in]='+category+'&populate=*'); // here we are fetching the events data from the api based on the category

const creatBooking = (data) => api.post('/bookevents', data); // here we are creating the booking data in the api

const getAllEvents = () => api.get('/events?populate=*'); // here we are fetching all the events data from the api

const getUserBooks = () => api.get('/bookevents?populate=*%27'); // here we are fetching the events data from the api based on the category

export default {
  getSlider,
  getCategories,
  getEvents,
  getEventsByCategory,
  creatBooking,
  getAllEvents,
  getUserBooks
  
}
