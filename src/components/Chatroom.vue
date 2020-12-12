<template>
  <div id="chatroom">
      <h2>Welcome:</h2>
      <template v-if="user==null">
          <router-link to="/user" tag="button">
            Login
          </router-link>
      </template>
      <template v-else>
          <div>
              <div v-for="(message, index) in messages" :key="index" class="bubble">
                <p>
                    <strong>{{message.author}} said:</strong>
                </p>
                <p>
                    <strong>{{message.body}}</strong>
                </p>
              </div>
              <form @onsubmit.prevent="">
                  <input type="text" placeholder="Enter your message..." v-model="input">
                  <b-button type="submit">Send</b-button>
              </form>
          </div>
      </template>
  </div>
</template>

<script>
import { mapState } from "vuex"
import {db} from "../firebase/db"
 
export default {
    name: 'Chatroom',

    data(){
        return{
            messages:[{author: "Juan",body: "Hola"}],
            input: null
        }
    },
    methods:{
        post: function(){
            let folder = db.ref ("forum/match" + this.$route.params.id)

            let message = {
                body: this.input,
                author: this.user.displayName,
                date: new Date()
            }

            folder.push(message)
            this.input=null
        }
    },

    computed:{
        ...mapState(['user'])
    },

    mounted(){
        this.messages = [];
        db.ref("forum/match" + this.$route.params.id).on("child_added", (snapshot)=>{
            this.messages.push(snapshot.val())
        })
    }

}
</script>

<style>

</style>