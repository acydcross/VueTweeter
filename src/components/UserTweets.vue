<template>
    <div class="user-tweets">
        <user-tweets></user-tweets>
    </div>
</template>

<script>
import axios from "axios";
import UserTweets from "./components/UserTweets.vue";
// import cookies from "vue-cookies";
    export default {
        name: "user-tweets",
        components: {
            UserTweets
        },
        data() {
            return {
                tweetId: "",
                userId: "",
                username: "",
                content: "",
                createdAt: ""
            };
        },
        methods: {
            tweetUser: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC"
                    },
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>