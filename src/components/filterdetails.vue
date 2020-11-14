<template>
  <div class="hello">
    <div v-if="(country == item.country || country == '') ? city == '' || city == item.city : '' " v-for="(item, index) in items" :key="index">
      <h3 @click="hide(index)">
        Country: {{ item.country }}, City: {{ item.city }},
      </h3>
      <p v-if="onclicl == item.id && active">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onclicl: "",
      active: false,
    };
  },
  computed: {
    items() {
      return this.$store.getters.getData;
    },
    country() {
      return this.$store.getters.getCountry;
    },
    city() {
      return this.$store.getters.getCity;
    },
  },

  methods: {
    hide(index) {
      this.onclicl = index;
      this.active = !this.active;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

