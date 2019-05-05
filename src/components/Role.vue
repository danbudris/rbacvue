<template>
    <div>
        <div>
            {{ Role }}
            {{ Pods }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import k8sApi from '../services/api/k8s'

export default Vue.extend({
    props: ['Role'],
    data() {
        return {
            Role: this.Role,
            Pods: k8sApi.getPods()
        }
    },
    mounted() {

    }
});
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>