<template>
  <div id="radius">
    <b-form-group label="Select search radius">
      <b-form-radio-group v-model="selected" :options="options" name="radioInline"/>
    </b-form-group>

    <div class="mt-3">
      Selected:
      <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "radius",
  data() {
    return {
      selected: "5 miles",
      options: [
        { text: "5 miles", value: "5 miles" },
        { text: "10 miles", value: "10 miles" },
        { text: "15 miles", value: "15 miles" }
      ]
    };
  }
};
</script>