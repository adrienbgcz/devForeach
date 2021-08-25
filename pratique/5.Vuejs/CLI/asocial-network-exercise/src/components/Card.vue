<template>
  <div class="card">
    <!-- <nuxt-link :to="`members/member.id${id}`"></nuxt-link> -->
        <img :src="member.img" alt="" />
        <p class="memberName">{{member.name}}</p>
        <p>{{member.hobby}}</p>
        <button v-if="!member.isFriend" @click="addFriend(member)">Contact</button>
        <p v-else class="msg">{{member.msg}}</p>
  
  </div>
</template>

<script>
  export default {
    props: ["member"],
    methods: {
      addFriend: function(member) {
        member.isFriend = true;
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    box-shadow: -1px 1px 5px black;
    padding: 9px;
  }
  .card * {
    text-align: left;
  }
  .memberName {
    font-size: 1.3rem;
  }

  img {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  button {
    border: 1px solid;
    background-color: transparent;
    /* height: 50px;
    width: 50px; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 6px 9px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    border: 1px solid green;
  }
  .msg {
    color: red;
  }
</style>
