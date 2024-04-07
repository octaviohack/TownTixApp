import axios from "axios";

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const API_KEY = 'AIzaSyADF4FSaCUU8m3uxh_pBkAYnBPQ7XWoKn0';

const nearbyPlace = (lat,lng, type) => axios.get(BASE_URL + '/nearbysearch/json'+ 
'?location='+lat+','+lng+'&radius=1500&type=' +type +'&key=' + API_KEY); 

const GlobalApi = {
    nearbyPlace // this is the function that we will use to get the nearby places
};

export default GlobalApi;