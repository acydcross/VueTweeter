<template>
    <div>
        
        <user-tweets />
    </div>
</template>

<script>
import UserTweets from "../components/UserTweets.vue";
import cookies from "vue-cookies";
    export default {
        name: "user-home",
        components: {
            UserTweets
        },
        data() {
            return {
                loginToken: cookies.get("loginToken")
            };
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>

</style>