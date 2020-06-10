<template>
  <div>
    <div class="navbar">
      <nav class="navbar-extended indigo darken-2">
        <div class="nav-content">
          <router-link :to="{
                name : 'Dashboard'}">
            <span class="brand-logo">Vue Smoothies</span>
          </router-link>
          <a href class="btn-floating btn-large halfway-fab pink">
            <router-link :to="{ 
                name : 'AddSmoothie'
                }">
              <i class="large material-icons">add</i>
            </router-link>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>
<style scoped>
nav .brand-logo {
  display: inline-block;
  margin-left: 20px;
}
.btn-floating.btn-large {
  position: absolute;
  top: 50px;
}
.navbar-extended {
  height: 80px;
  line-height: 80px;
}
</style>