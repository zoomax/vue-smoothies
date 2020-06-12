<template>
  <div class="container edit-smoothie">
    <h3 class="center-align indigo-text">Edit Smoothie Recipe</h3>
    <form @submit.prevent="submitForm">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input name="title" type="text" v-model="title" />
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add An Ingredient:</label>
        <input name="add-ingredient" type="text" @keydown.tab="addIng" v-model="addIngredient" />
      </div>
      <div class="field">
        <ul>
          <li v-for="(ingredient , index) in ingredients" :key="index" class="chip">
            {{ingredient}}
            <i
              class="material-icons indigo-text delete"
              @click="removeIng(index)"
            >delete</i>
          </li>
        </ul>
      </div>
      <div class="field center-align">
        <p class="red-text">{{feedback}}</p>
      </div>
      <div class="field center-align">
        <button class="btn btn-large pink">Edit Smoothie</button>
      </div>
    </form>
  </div>
</template>
<script>
import db from "@/utils/firebase.init";
export default {
  name: "EditSmoothie",
  data() {
    return {
      title: null,
      addIngredient: null,
      ingredients: [],
      feedback: null,
      smoothie: null
    };
  },
  created() {
    const _self = this;
    const query = db
      .collection("smoothies")
      .doc(this.$route.params.id.toString());
    query.get().then(snapshot => {
      _self.smoothie = { ...snapshot.data(), id: snapshot.id };
      _self.title = _self.smoothie.title;
      _self.ingredients = _self.smoothie.ingredients;
    });
  },
  methods: {
    resetForm() {
      this.addIngredient = null;
      this.title = null;
      this.ingredients = [];
    },
    submitForm() {
      if (this.title && this.ingredients.length > 0) {
        const smoothie = {
          title: this.title,
          ingredients: this.ingredients,
          slug: this.title
            .toLowerCase()
            .replace(/[$*_+~.()'"!\-:@]/g, "")
            .replace(" ", "-")
        };
        console.log(smoothie);
        db.collection("smoothies")
          .doc(this.smoothie.id)
          .update(smoothie)
          .then(snapshot => {
            this.resetForm();
            console.log(snapshot);
            this.$router.push({ name: "Dashboard" });
          });
      } else {
        if (!this.title) this.feedback = "Please Add A Title To Your Smoothie";
        else this.feedback = "Please Add An Ingredient To Your Smoothie";
      }
    },
    addIng() {
      if (this.addIngredient) {
        this.ingredients.push(this.addIngredient);
        this.addIngredient = null;
        this.feedback = null;
      } else {
        this.feedback = "Please Add An Ingredient To Your Smoothie";
      }
    },
    removeIng(i) {
      this.addIngredient = this.ingredients[i];
      this.ingredients = this.ingredients.filter((ing, index) => index != i);
    }
  }
};
</script>

<style scoped>
.add-smoothie {
  max-width: 500px;
  margin-top: 50px;
  padding: 20px;
}
.add-smoothie .field {
  margin: 20px auto;
}
.chip {
  position: relative;
  color: rgb(49, 49, 49);
  font-size: 16px;
  cursor: pointer;
}
.delete {
  position: relative;
  top: 5px;
  right: 0px;
}
</style>