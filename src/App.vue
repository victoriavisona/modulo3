<template>
  <div id="app">
    <header v-bind:class="{homeHeader: $route.name == 'Home', schHeader: $route.name == 'Schedule', userHeader: $route.name == 'User'}" id="appheader"> 
      <h1>Northside Youth Soccer League</h1>
      <img src="./assets/nysl_logo.png" id="logo">
      <div id="nav">
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-brand to="/">Home</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="schedule">Schedule</b-nav-item>
              <b-nav-item to="user">User</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <main v-bind:class="{homeMain: $route.name == 'Home', schMain: $route.name == 'Schedule', userMain: $route.name == 'User'}">
      <router-view>

      </router-view>
    </main>
    <footer v-bind:class="{homeFoot: $route.name == 'Home', schFoot: $route.name == 'Schedule', userFoot: $route.name == 'User'}">
      <h3><strong>Please email us: </strong><a href="mailto:nysl@chisoccer.org">Here</a></h3>
      <p>We will reply to your email as soon as we can</p>
    </footer>
  </div>
</template>
<script>
  import { mapMutations } from "vuex"

  export default {
    name: "app",
    methods: {
      ...mapMutations(["getUser"])
    },
    mounted() {
      this.getUser()
    }
  }
</script>
<style lang="scss">
  *{
    margin: 0%;
    padding: 0%;
  }
  /*header*/
  #appheader{
    background-image: url("assets/fondodp.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    width: 100%;
    height: 13em;

  }
  #logo{
    position: absolute;
    top: 1%;
    right: 2%;
    width: 5em;
    height: 5em;
    box-shadow: 5px 5px rgb(5, 61, 5);
    border-radius: 50%;
  }
  #nav{
    position: absolute;
    top: 9.5em;
    width: 100%;
  }
  a{
    color: white !important;
  }
  h1{
    font-family:'Times New Roman', Times, serif;
    color:white;
    font-size: 1.75em !important;
    text-align: center;
    position: absolute;
    top: 4.3em;
    left: 5%;
    margin: 0% !important;
  }
  .homeHeader{
    div{
      background-color: rgb(19, 146, 163);
    }
    h1{
      background-color: rgb(13, 207, 233);
    }
  }
  .schHeader{
    div{
      background-color: rgb(130, 24, 252);
    }
    h1{
      background-color: rgb(95, 9, 194);
    }
  }
  .userHeader{
    div{
      background-color: rgb(209, 13, 235);
    }
    h1{
      background-color: rgb(135, 3, 158);
    }
  }
  /*main*/      
  main{
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    a{
      text-decoration: underline !important;
    }
  }
  .homeMain{
    background-color: rgba(102, 221, 236, 0.849);
    padding: 1em;
  }
  .schMain{
    background-color: rgba(162, 93, 241, 0.74);
    padding: 1em;
    font-size: 1em !important;
    h4{
      margin: 0% !important;
      font-size: 1.2em;
    }
    p{
      margin: 0% !important;
    }
    #email{
      font-size: 1em;
    }
    
  }
  .userMain{
    background-color: rgba(246, 115, 235, 0.746) !important;
    padding: 1em;
  }
  /*footer*/
  footer{
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    a{
      text-decoration: underline !important;
    }
    h3{
      margin: 0%;
      font-size: 1.5em !important;
    }
    p{
      margin-bottom: 0%;
    }
  }
  .homeFoot{
    background-color: rgb(19, 146, 163);
  }
  .schFoot{
    background-color: rgb(130, 24, 252);
  }
  .userFoot{
    background-color: rgb(209, 13, 235);
  }
</style>
