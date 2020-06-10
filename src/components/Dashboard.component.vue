<template>
  <div class="dashboard container">
    <div class="card" v-for="(smoothie , index) in smoothies" :key="index">
      <div class="card-content">
        <h4 class="indigo-text">{{smoothie.title}}</h4>
        <ul class="ingredients">
          <li
            class="chip"
            v-for="(ingredient , index) in smoothie.ingredients"
            :key="index"
          >{{ingredient}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      name: "Dashboard",
      smoothies: [
        {
          title: "berw smoothie",
          slug: "brew-smoothie",
          id: "1",
          ingredients: ["banana", "apple", "milk", "honey"]
        },
        {
          title: "morning drink",
          slug: "morning-drink",
          id: "2",
          ingredients: ["coffee", "milk", "suger"]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.chip {
  display: inline-block;
  margin: 10px;
  font-size: 16px;
}
</style>
