<template>
  <div class="filterbox">
    <h1>Lists</h1>
    <select
      id="countryId"
      @change="changeCountry"
      style="width: 200px; font-size: 15px; padding: 5px"
    >
      <option selected value="">Select Country</option>
      <option
        v-for="(country, index) in countris"
        :key="index"
        :value="country"
      >
        <span> {{ country }} </span>
      </option>
    </select>
    <select
      id="cityId"
      @change="changecity"
      style="width: 200px; font-size: 15px; padding: 5px"
    >
      <option selected value="">Select City</option>

      <option
        v-if="countryName == item.country"
        v-for="(item, index) in items"
        :key="index"
        :value="item.city"
      >
        {{ item.city }}
      </option>
    </select>
  </div>
</template>

<script>
import uniq from "lodash/uniq";
export default {
  data() {
    return {
      countryName: "",
      cityName: "",
      cityCheck: [],
    };
  },

  computed: {
    countris() {
      return uniq(this.$store.getters.getData.map(({ country }) => country));
    },

    //City filter
    // citys() {
    //   const result = Array.from(
    //     new Set(this.$store.getters.getData.map((s) => s.city))
    //   ).map((city) => {
    //     return {
    //       city: city,
    //       id: this.$store.getters.getData.find((sa) => sa.city === city).id,
    //     };
    //   });
    //   return result;
    // },
    items() {
      return this.$store.getters.getData;
    },
  },

  methods: {
    changeCountry() {
      this.countryName = document.getElementById("countryId").value;
      this.$store.commit("setCountry", this.countryName);
      this.$store.commit("clrCity");

      // console.log(this.citys);
    },
    changecity() {

      this.cityName = document.getElementById("cityId").value;
      this.$store.commit("setCity", this.cityName);
      
      //City Filter
      // this.citys.forEach((element) => {
      //   if (this.cityName == element.city) {
      //     this.cityCheck = element.id;
      //     console.log(this.cityCheck);
      //   }
      // });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

