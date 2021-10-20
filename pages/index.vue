<template>
  <section class="min-h-screen w-screen bg-alipblue">
    
    <Navbar/>
    
    <div class="p-8 flex flex-col justify-center items-center">
      <h1 class="flex pt-24 text-alipwhite py-5 text-center text-6xl sm:text-7xl">alifiarahmah</h1>
      <p class="flex text-alipwhite text-center text-xl sm:text-2xl">Your average Informatics Engineering student.</p>
      <!--button @click="toggleForm=!toggleForm" class="mt-10 p-4 border-2  rounded-full text-alipwhite font-bold hover:bg-alipwhite hover:text-alipblue">
        Got anything to say?
      </button-->
    </div>

    <div v-if="toggleForm" class="p-5 flex w-full justify-center">
      <form role="form" method="POST" @submit.prevent="submitForm">
        <input type="text" name="name" model="nameMsg" placeholder="Name (optional)" 
          class="block w-full"/>
        <textarea name="message" model="messageMsg" placeholder="Message" class="block my-5 w-full"></textarea>
        <input type="submit" :disabled="!msg"
          class="mt-5 p-2 border-2 text-alipwhite font-bold hover:bg-alipwhite hover:text-alipblue"
        >
      </form>
    </div>

  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      toggleForm: false,
      nameMsg: '',
      messageMsg: '',
    }
  },
  methods: {    
    submitForm() {            
      axios.post('https://formspree.io/f/xgervpvp',{
        name: this.name,          
        msg: this.msg,          
        _subject: 'Message from alifiarahmah\'s basecamp',
        },
      ).then((response) => {
        this.name = '';
        this.msg = '';
        // redirect my app to '/success' route once payload completed.  
        this.$router.push({ path: '/success' });      
      }).catch((error) => {        
        if (error.response) {          
          // eslint-disable-next-line no-alert
          alert(error.response.data); // => the response payload        
        }
      });
    }
  },
};
</script>
