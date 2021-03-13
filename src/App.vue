<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
      <router-view name="sidebar"></router-view>
      <div class="main-content" id="panel">
        <router-view name="topnav"></router-view>
        <!-- Header -->
        <div class="header bg-primary pb-6">
          <div class="container-fluid">
            <div class="header-body">
              <router-view name="header"></router-view>
            </div>
          </div>
        </div>
        <div class="container-fluid mt--6">
          <router-view/>
          <router-view name="footer"></router-view>
        </div>
      </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
