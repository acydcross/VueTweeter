<template>
  <div>
    <h1>Sign Up Page</h1>
    <signup-form></signup-form>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";

export default {
  name: "signup-page",
  components: {
    SignupForm
  }
};
</script>

<style lang="scss" scoped></style>
