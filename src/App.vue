<template>
  <!-- Navbar -->
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projects</router-link>
  </nav>

  <router-view/>
</template>

<style>
* {
  margin: 0;
}

#app {
  font-family: Ubuntu, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background: rgb(255,255,255);
  /*background: linear-gradient(132deg, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%);*/
  color: #111;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  font-size: 1.25rem;
}

#nav a {
  font-weight: normal;
  color: #111;
  text-decoration: none;
}

#nav a.router-link {
  margin: 5vw;
}

#nav a.router-link-exact-active {
  font-weight: bold;
}

h1 {
  font-size: 4rem;
  font-weight: bold;
}

p {
  font-size: 1.25rem;
  line-height: 2rem;
  margin: 2vh 0;
}
</style>
