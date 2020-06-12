<template>
  <div>
    <div class="loader container">
      <img src="../assets/logo.png" alt="loader image" class="center-align" v-if="isLoaded" />
    </div>
    <div class="dashboard container">
      <div class="card" v-for="(smoothie , index) in smoothies" :key="index">
        <div class="card-content">
          <i class="material-icons delete-icon" @click="deleteSmoothie(smoothie.id)">delete</i>
          <h4 class="indigo-text">{{smoothie.title}}</h4>
          <ul class="ingredients">
            <li
              class="chip"
              v-for="(ingredient , index) in smoothie.ingredients"
              :key="index"
            >{{ingredient}}</li>
          </ul>
          <router-link
            class="btn-floating btn-large halfway-fab pink"
            :to="{name:'EditSmoothie' , params:{
              id: smoothie.id
            }}"
          >
            <i class="material-icons">edit</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/utils/firebase.init";
export default {
  name: "Dashboard",
  data() {
    return {
      name: "Dashboard",
      smoothies: [],
      isLoaded: true
    };
  },
  methods: {
    deleteSmoothie(id) {
      db.collection("smoothies")
        .doc(id)
        .delete()
        .then(item => {
          this.smoothies = this.smoothies.filter(smoothie => smoothie.id != id);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },
  created() {
    const _self = this;
    db.collection("smoothies")
      .get()
      .then(snapshot => {
        if (snapshot.docs.length != 0) _self.isLoaded = false;
        _self.smoothies = snapshot.docs.map(smoothie => ({
          id: smoothie.id,
          ...smoothie.data()
        }));
      });
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
.material-icons.delete-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #aaa;
  cursor: pointer;
}
.loader {
  text-align: center;
}

.loader img {
  display: inline-block;
  margin: 100px auto 50px;
}
</style>
