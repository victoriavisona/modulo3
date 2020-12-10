<template>
  <div>
    <div>
      <h4 class="mt-3"><strong>Game INFO:</strong></h4>
      <b-calendar @selected="partidos"
        :date-format-options="{
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }"
        locale="en"
      ></b-calendar>
      <b-modal id="infoPartidos">
        <div v-for="(p,index) in partidoSelec" :key="index">
          {{p.team1}} VS {{p.team2}}
          Time: {{p.time}}
          Location: {{p.location}}
          Address: {{p.address}}
        </div>
      </b-modal>
    </div>
    <h4><strong>Additional Information:</strong></h4>
    <p>
      If deemed necessary by NYSL,<br />games may be shortened or cancelled<br />due
      to extreme weather conditions.
    </p>
    <h4><strong>Please direct all questions to:</strong></h4>
    <p>Michael Randall, League Coordinator</p>
    <p><strong>Phone:</strong>(630)690-8132</p>
    <h4 id="email">
      Email:
      <a href="michael.randall@chisoccer.org">michael.randall@chisoccer.org</a>
    </h4>
  </div>
</template>

<script>
  export default{
    methods: {
      partidos(ymd, date) {
        this.partidoSelec=[]
        this.$bvModal.show("infoPartidos")
        for(let i=0; i<this.info.Games.length; i++){
          if((date.getDate()==this.info.Games[i].day)&&((date.getMonth()+1)==this.info.Games[i].mounth)){
            this.partidoSelec.push(this.info.Games[i])
          }
        }
        console.log(ymd)
        console.log(date.getDate())
        console.log(date.getMonth()+1)
      }
    },
    data(){
      return {
        info:{
          "Games": [
              {
                "id":0,
                "team1": "U1",
                "team2": "U4",
                "day": 1,
                "mounth": 9,
                "time": "9:30 am",
                "location": "AJ Katzenmaier Elementary",
                "address":"24 W. Walton St., Chicago, IL 60610",
                "codLocation":1
              },
              {
                "id":1,
                "team1": "U3",
                "team2": "U2",
                "day": 1,
                "mounth": 9,
                "time": "1:00 pm",
                "location": "Greenbay Elementary",
                "address":"1734 N. Orleans St., Chicago, IL 60614",
                "codLocation":2
              },
              {
                "id":2,
                "team1": "U5",
                "team2": "U6",
                "day": 8,
                "mounth": 9,
                "time": "9:30 am",
                "location": "Howard A Yeager Elementary",
                "address":"2245 N. Southport Ave., Chicago, IL 60614",
                "codLocation":3
              },
              {
                "id":3,
                "team1": "U6",
                "team2": "U1",
                "day": 8,
                "mounth": 9,
                "time": "1:00 pm",
                "location": "Marjorie P Hart Elementary",
                "address":"2625 N. Orchard St., Chicago, IL 60614",
                "codLocation":4
              },
              {
                "id":4,
                "team1": "U2",
                "team2": "U4",
                "day": 15,
                "mounth": 9,
                "time": "9:30 am",
                "location": "North Elementary",
                "address":"1409 N. Ogden Ave., Chicago, IL 60610",
                "codLocation":5
              },
              {
                "id":5,
                "team1": "U3",
                "team2": "U5",
                "day": 15,
                "mounth": 9,
                "time": "1:00 pm",
                "location": "AJ Katzenmaier Elementary",
                "address":"24 W. Walton St., Chicago, IL 60610",
                "codLocation":1

              },
              {
                "id":6,
                "team1": "U1",
                "team2": "U3",
                "day": 22,
                "mounth": 9,
                "time": "9:30 am",
                "location": "South Elementary",                
                "address":"2101 N. Fremont St., Chicago, IL 60614",
                "codLocation":6
              },
              {
                "id":7,
                "team1": "U2",
                "team2": "U6",
                "day": 22,
                "mounth": 9,
                "time": "1:00 pm",
                "location": "Howard A Yeager Elementary",                
                "address":"2245 N. Southport Ave., Chicago, IL 60614",
                "codLocation":3
              },
              {
                "id":8,
                "team1": "U4",
                "team2": "U5",
                "day": 29,
                "mounth": 9,
                "time": "9:30 am",
                "location": "Greenbay Elementary",               
                "address":"1734 N. Orleans St., Chicago, IL 60614",
                "codLocation":2
              },   
              {
                "id":9,
                "team1": "U2",
                "team2": "U5",
                "day": 6,
                "mounth": 10,
                "time": "9:30 am",
                "location": "Marjorie P Hart Elementary",                
                "address":"2625 N. Orchard St., Chicago, IL 60614",
                "codLocation":4
              },
              {
                "id":10,
                "team1": "U1",
                "team2": "U6",
                "day": 6,
                "mounth": 10,
                "time": "1:00 pm",              
                "location": "South Elementary",
                "address":"2101 N. Fremont St., Chicago, IL 60614",
                "codLocation":6
              },
              {
                "id":11,
                "team1": "U3",
                "team2": "U4",
                "day": 8,
                "mounth": 10,
                "time": "9:30 am",
                "location": "Howard A Yeager Elementary",                
                "address":"2245 N. Southport Ave., Chicago, IL 60614",
                "codLocation":3
              },
              {
                "id":12,
                "team1": "U5",
                "team2": "U1",
                "day": 8,
                "mounth": 10,
                "time": "1:00 pm",
                "location": "Greenbay Elementary",                
                "address":"1734 N. Orleans St., Chicago, IL 60614",
                "codLocation":2
              },
              {
                "id":13,
                "team1": "U6",
                "team2": "U3",
                "day": 20,
                "mounth": 10,
                "time": "9:30 am",
                "location": "North Elementary",
                "address":"1409 N. Ogden Ave., Chicago, IL 60610",
                "codLocation":5
              },
              {
                "id":14,
                "team1": "U2",
                "team2": "U4",
                "day": 20,
                "mounth": 10,
                "time": "1:00 pm",
                "location": "Marjorie P Hart Elementary",
                "address":"2625 N. Orchard St., Chicago, IL 60614",
                "codLocation":4
              },
              {
                "id":15,
                "team1": "U3",
                "team2": "U1",
                "day": 27,
                "mounth": 10,
                "time": "9:30 am",
                "location": "AJ Katzenmaier Elementary",                
                "address":"24 W. Walton St., Chicago, IL 60610",
                "codLocation":1
              },
              {
                "id":16,
                "team1": "U5",
                "team2": "U6",
                "day": 27,
                "mounth": 10,
                "time": "1:00 pm",
                "location": "Howard A YeagerElementary",
                "address":"2245 N. Southport Ave., Chicago, IL 60614",
                "codLocation":3
              }
          ]
        },
        partidoSelec:[]
      }
    }
  }
</script>