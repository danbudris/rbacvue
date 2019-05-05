import axios from "axios";
export default {
    getResources: function () {
        return axios.get("https://google.com").then(function (response) {
            return response.data;
        });
    }
};
//# sourceMappingURL=k8s.js.map