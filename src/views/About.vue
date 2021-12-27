<template>
  <section id="about">

    <div class="">
      <h1>Hello, I’m Alifia.</h1>
      <p>
        I’m an undergraduate Informatics Student with a keen interest in
  software engineering. Currently, I’m learning about Web Development and Mobile Development. In my spare time, I love to learn some new skills, practice on by doing some personal projects, or join hackathons.
      </p>
    </div>

    <div class="my-16">
      <h2>What can I do?</h2>
      <div v-for="skill in skills" :key="skill.name">
        <h3>{{ skill.name }}</h3>
        <div v-for="desc in skill.list" :key="desc">
          <p>{{ desc }}</p>
        </div>
      </div>
    </div>

    <div class="my-16">
      <h2>Experiences</h2>
      <div v-for="exp in experiences" :key="exp.position">
        <h3>{{ exp.position }}</h3>
        <p class="my-0 text-xl text-gray-500 font-medium">
          {{ exp.period }} | {{ exp.company }}
        </p>
        <p>{{ exp.description }}</p>
      </div>
    </div>

    <div class="my-16">
      <h2>Achievements</h2>
      <div v-for="achv in achievements" :key="achv.name">
        <h3>{{ achv.name }}</h3>
        <p class="my-0 text-xl text-gray-500 font-medium">
          {{ achv.date }} | {{ achv.issuer }} ({{ achv.level }})
        </p>
        <p>{{ achv.description }}</p>
      </div>
    </div>

  </section>
</template>

<script>
import skills from '@/data/skills.json'
import experiences from '@/data/experiences.json'
import achievements from '@/data/achievements.json'

export default {
  name: 'About',
  data(){
    return {
      skills,
      experiences,
      achievements
    }
  }
}
</script>