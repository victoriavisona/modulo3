<template>
  <div>
      <template v-if="user == null">
          <button @click="login()">Login With Google</button>
      </template>
      <template v-else>
            <div>
                <h2><strong>My Info:</strong></h2>
                <h2> Hi: {{user.displayName}}</h2>
                <p>{{user.email}}</p>
                <img :src="user.photoURL">
            </div>
            <router-link to="'/Chatroom/' + index">
                <b-button >Chat</b-button>
            </router-link>
        
            <button @click="logout()">Log Out</button>
      </template>
  </div>
</template>

<script>

import firebase from "firebase/app";
import "firebase/auth";
import { mapState } from "vuex";

export default {
    name: 'User',
    computed:{
        ...mapState(["user"]),
    },
    methods: {
        login() {
            let provider = new firebase.auth.GoogleAuthProvider();
            
            firebase.auth().signInWithPopup(provider)
            .then(
                result => {
                    console.log(result.user);
                }
            )
            .catch(
                error => {
                    console.log(error.code);
                }
            );

        },
        logout() {
            firebase.auth().signOut()
            .then(function () {
                console.log()
            }
            )
            .catch(
                result => {
                    console.log(result)
                }
            )
        }
    }
}
</script>
<style lang="sass">
    
</style>