<template>
  <section id="projects">
    <h1>Projects</h1>
    <p>Some projects I've worked on.</p>

    <div class="flex space-between flex-wrap">
      <div v-for="project in projects" :key="project.name">

        <div class="max-w-1/4 my-4 p-4 border-4 border-black rounded flex space-between items-center">
          <div class="w-7/10">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description}}</p>
            <div class="flex">
              <div v-for="tag in project.tags" :key="tag">
                <button class="py-2 px-4 mx-1 rounded-full bg-black text-white text-xs">
                  {{ tag }}
                </button>
              </div>
            </div>
            <div class="flex w-full justify-end">
              <div v-for="link in project.link" :key="link.type">
                <div>
                  <button class="py-2 px-4 mx-1 rounded-full border-black hover:underline">
                    <a :href="link.url" target="_blank" class="text-md font-bold">
                      <span v-if="link.type=='web'">
                        Visit
                      </span>
                      <span v-else-if="link.type=='mobile'">
                        Download APK
                      </span>
                      <span v-else-if="link.type=='desktop'">
                        Download
                      </span>
                      <span v-else-if="link.type=='github'">
                        See Repository
                      </span>
                    </a>
                  </button>
                </div>
              </div>
              <div v-if="repo!=null">
                <button>
                  <a :href="link.url" target="_blank">
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
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