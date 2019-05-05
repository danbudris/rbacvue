import Vue from "vue";
import RoleComponent from "./components/Role.vue";
import HelloComponent from "./components/Hello.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        <roles-component :Role="testValue" />
    </div>
    `,
    data: { 
        name: "World", 
        testValue: "A Role In K8s" 
        },
    components: {
        "hello-component": HelloComponent,
        "role-component": RoleComponent
    }
});