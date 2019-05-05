<template>
    <div>
        <div>
            {{ Role }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['Role'],
    data() {
        return {
            Role: this.Role,
        }
    }
});
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>