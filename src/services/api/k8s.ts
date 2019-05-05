const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.Core_v1Api);

export default {
    getPods(){
        k8sApi.listNamespacedPod('default').then((res:any) => {
            return(res.data);
        });
    }
}

/*import axios from "axios"

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
*/