<template>
    <div>
        <h2 id="name-user"> Hello, {{user.userId}}.</h2>
        <h3>
            {{}}
        </h3>
    </div>
</template>

<script>
// import cookies from "vue-cookies";
import axios from "axios";
    export default {
        name: "user-profile",
        computed: {
            user: function() {
                this.$store.state.user;
            }
        },
        methods: {
            userProfile: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/users",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC",
                    },
                    data: {
                        userId: this.userId
                    }
                }).then((response) => {
                    this.loginStatus = "success";
                    console.log(response);
                    document.getElementById("name-user").innerHTML = ("userId");
                }).catch((error) => {
                    console.log(error);
                    this.loginStatus="fail";
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>