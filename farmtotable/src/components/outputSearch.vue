<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "outputSearch",
  props: {
    msg: {
      type: String
    }
  },
  data() {
    return {};
  },
  watch: {
    msg: function() {
      //
    }
  }
};
</script>