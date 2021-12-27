<template>
  <section class="home">
    
    <div class="landing">
      <img id="avatar" src="https://avatars.githubusercontent.com/u/28982967?v=4" alt="profile-picture">
      <div id="desc">
        <h1>Alifia Rahmah</h1>
        <p>
          Undergraduate Informatics Engineering Student with interest in Software Engineering.<br>
          Currently learning web development, UI/UX, and mobile development.
        </p>
      </div>
      <div id="links">
        <div>
          <a href="https://github.com/alifiarahmah" target="_blank">
            <img src="@/assets/images/button_mail.svg">
          </a>
        </div>
        <div>
          <a href="https://instagram.com/hamharaifila" target="_blank">
            <img src="@/assets/images/button_instagram.svg">
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/alifiarahmah" target="_blank">
            <img src="@/assets/images/button_linkedin.svg">
          </a>
        </div>
        <div>
          <a href="https://github.com/alifiarahmah" target="_blank">
            <img src="@/assets/images/button_github.svg">
          </a>
        </div>
      </div>
    </div>



  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.landing {
  margin-top: 8vh;
}

.landing#desc {
  margin-top: 3vh;
}

#links {
  display: flex;
  justify-content: center;
}

#links div {
  margin: 0 1.5rem;
}

#avatar {
  width: 15%;
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.5rem;
}
</style>
