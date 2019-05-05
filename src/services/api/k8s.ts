import axios from "axios"

const caCert = process.env.caCert;
const bearerToken = process.env.bearerToken;
const k8sApiServer = process.env.k8sApiServer;

export default {
    getResources(){
        return axios.get("https://google.com"
        ).then(response => {
            return response.data
        })
    }
};