import axios from "axios";

const instance = axios.create({
    //the API(cloud function) URL
    baseURL: 'http://localhost:5001/clone-c1fde/us-central1/api'
    //here a cloud functions url will be execute instade of local url
});

export default instance;