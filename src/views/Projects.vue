<template>
  <section class="projects">
    <h1>Here are some of my projects</h1>

    <!-- PROJECT LIST -->
    <div v-for="project in projects" :key="project.name">
      <h5>{{ project.name }}</h5>
      <p>{{ project.description}}</p>
    </div>

  </section>
</template>

<script>
import projectList from '../data/projects.json'

export default {
  name: 'Projects',
  data(){
    return {
      projects: projectList
    }
  }
}
</script>