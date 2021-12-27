<template>
  <section id="home" class="w-4/5">
    
    <div class="mt-16">
      <img
        class="rounded-full mx-auto"
        id="avatar" 
        src="https://avatars.githubusercontent.com/u/28982967?v=4" 
        alt="profile-picture"
      >
      <div id="desc">
        <h1 class="text-center">
          Alifia Rahmah
        </h1>
        <p class="text-center">
          Undergraduate Informatics Engineering Student with interest in Software Engineering.<br>
          Currently learning web development, UI/UX, and mobile development.
        </p>
      </div>
      <div id="links" class="flex justify-center">
        <div class="mx-5">
          <a href="https://github.com/alifiarahmah" target="_blank">
            <img src="@/assets/images/button_mail.svg">
          </a>
        </div>
        <div class="mx-5">
          <a href="https://instagram.com/hamharaifila" target="_blank">
            <img src="@/assets/images/button_instagram.svg">
          </a>
        </div>
        <div class="mx-5">
          <a href="https://linkedin.com/in/alifiarahmah" target="_blank">
            <img src="@/assets/images/button_linkedin.svg">
          </a>
        </div>
        <div class="mx-5">
          <a href="https://github.com/alifiarahmah" target="_blank">
            <img src="@/assets/images/button_github.svg">
          </a>
        </div>
      </div>
    </div>



  </section>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
#avatar {
  width: 15vw;
}
</style>
