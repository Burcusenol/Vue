<template>
  <div>
    <p class="counter-container">Sayaç : {{ double }}</p>
    <p class="counter-container">Tıklama Sayısı : {{ string }}</p>
    <input type="text" v-model="value" />
    <p>{{ value }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  // props : ["counter"],
  computed: {
    ...mapGetters({
      double: "getDoubleCounter",
      string: "stringCounter",
    }),
    value: {
      get() {
        return this.$store.getters.getValue;
      },
      set(value) {
        this.$store.dispatch("setData", value);
      },
    },
  },
  methods: {
    setValue(event) {
      this.$store.dispatch("setData", event.target.value);
    },
  },
};
</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>
