<template>
  <div>
    <user-tweets />
    <tweet-form></tweet-form>
  </div>
</template>

<script>
import UserTweets from "../components/UserTweets.vue";
import TweetForm from "../components/TweetForm.vue";
import cookies from "vue-cookies";
export default {
  name: "user-home",
  components: {
    UserTweets,
    TweetForm,
  },
  data() {
    return {
      loginToken: cookies.get("loginToken")
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
