import axios from "axios"

export default {
    getResources(){
        return axios.get("https://google.com"
        ).then(response => {
            return response.data
        })
    }
};