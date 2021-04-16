<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- Navbar content -->
      <div class="container">
        <a href="" class="navbar-brand">Vue Express</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon">

          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto"
              v-if="!$store.getters.token">
              <li class="nav-link">
                <router-link to="/login" class="nav-link">Log in</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/register" class="nav-link">Register</router-link>
              </li>
          </ul>
          <ul class="navbar-nav ml-auto"
              v-else>
              <li class="nav-link">
                <router-link to="/feeds" class="nav-link">Feeds</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/setting" class="nav-link">Setting</router-link>
              </li>
              <li class="nav-link">
                <router-link to="#" class="nav-link" @click.prevent="logout()">Log out</router-link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid overflow-hidden">
      <div class="row">
        <router-view/>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.commit('setToken');
      this.$router.push('/login')
    }
  }
}
</script>