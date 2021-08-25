<template>
  <main id="app">
    <Card v-for="member in members" :key="member.id" :member="member"/>
  </main>
  
</template>

<script>
  import Card from '@/components/Card.vue'

  export default { // pour permettre au template du dessus d'utiliser les données
    name: "App",
    components: {
      Card
    },
    props: [],
    data() {
      return {
        members: [
          {
            id: 1,
            name: "Supernaze",
            hobby: "J'aime fumer la pipe",
            img: "https://i-mom.unimedias.fr/2021/03/03/superman_henry_cavill.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=507&w=806",
            isFriend: null,
            msg: "Allez vous faire voir",
          },
          {
            id: 2,
            name: "Patathor",
            hobby: "Je pratique le crochet",
            img: "https://www.presse-citron.net/app/uploads/2019/10/Thor-main-e1571171852304.jpg",
            isFriend: null,
            msg: "Allez vous faire voir",
          },
          {
            id: 3,
            name: "Nulk",
            hobby: "Je suis jardinier",
            img: "https://media.melty.fr/article-4009154-so-f5/media.jpg",
            isFriend: null,
            msg: "Pshhhht allez bouge",
          },
          {
            id: 4,
            name: "Dr Bizarre",
            hobby: "Je suis artificier amateur",
            img: "https://www.e-tribart.fr/blog/wp-content/uploads/2016/11/strange1.jpg",
            isFriend: null,
            msg: "Je vous demande de vous arrêter",
          },
          {
            id: 5,
            name: "Monsieur acier",
            hobby: "On m'appelle Joe la Bricole",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu8cAgrGeqkw1fHJozzhrcnCdgCUJxAw5sg&usqp=CAU",
            isFriend: null,
            msg: "Bouge ou je te vaporise",
          },
          {
            id: 6,
            name: "La vilaine sorcière",
            hobby: "Je suis éducatrice pour enfant",
            img: "https://static.hitek.fr/img/actualite/ill_m/733829143/wanda.webp",
            isFriend: null,
            msg: "Allez ! Ouste !",
          },
          {
            id: 7,
            name: "Jackie Vinyl",
            hobby: "Je sais faire des saltos",
            img: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/11/black-widows-marvel-big__w770.jpg",
            isFriend: null,
            msg: "Va voir ailleurs si j'y suis",
          },
          {
            id: 8,
            name: "Johnny panthère",
            hobby: "Je couds mes costumes",
            img: "    https://www.presse-citron.net/app/uploads/2019/07/blackpanther-e1562324931731.jpg",
            isFriend: null,
            msg: "Si tu approches : coup de griffe",
          },
        ],
      };
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
    display: grid;
    grid-template-columns: repeat(4, 24.5%);
    gap: 9px;
  }
</style>
