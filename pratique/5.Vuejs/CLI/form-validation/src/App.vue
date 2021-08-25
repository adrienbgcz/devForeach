<template>
  <div id="app">
    <form @submit.prevent="postData">
      
      <label for="pseudo">Nom utilisateur</label>
      <input v-model="pseudo" type="text" name="pseudo" id="pseudo" @input="isValidPseudo(pseudo)"/>
      <span v-if="!lengthUserIsOk">{{ messageUser }}</span><br/>
     

      <label for="pass">Mot de passe</label>
      <input v-model="password" type="password" name="pass" id="pass" @input="isValidPassword(password)" />
      <span v-if="!lengthPasswordIsOk">{{ messagePassword }}</span><br/>
      
      
      <br />
      <input v-if="displayButton" type="submit" value="Se connecter" />
      <input v-else type="submit" value="Se connecter" disabled/>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pseudo: "",
      password: "",
      messageUser: "",
      messagePassword: "",
      lengthUserIsOk: true,
      lengthPasswordIsOk: true
    };
  },
  methods: {
    displayMessageUser: function (inputValueLength) {
      
      if (inputValueLength < 4) {
        this.messageUser = "Trop court"
      }
      if (inputValueLength > 8) {
        this.messageUser = "Trop long"
      }
      if ((inputValueLength >=4 && inputValueLength <= 8) || inputValueLength == 0) {
        this.messageUser = ""

      }
    },

    displayMessagePassword: function (inputValueLength) {
      
      if (inputValueLength < 4) {
        this.messagePassword = "Trop court"
      }
      if (inputValueLength > 8) {
        this.messagePassword = "Trop long"
      }
      if ((inputValueLength >=4 && inputValueLength <= 8) || inputValueLength == 0) {
        this.messagePassword = ""

      }
    },


    isValidPseudo: function (inputValue) {
      if (inputValue.length < 4 || inputValue.length > 8) {
        this.lengthUserIsOk = false
        this.displayMessageUser(inputValue.length)
      } 
      if (inputValue.length >=4 && inputValue.length <= 8) {
        this.lengthUserIsOk = true
        this.displayMessageUser(inputValue.length)
      }
    },


    isValidPassword: function (inputValue) {
      if (inputValue.length < 4 || inputValue.length > 8) {
        this.lengthPasswordIsOk = false
        this.displayMessagePassword(inputValue.length)
      } 
      if (inputValue.length >=4 && inputValue.length <= 8) {
        this.lengthPasswordIsOk = true
        this.displayMessagePassword(inputValue.length)
      }
    },

    postData: async function() {

      let data = {
        username : this.pseudo,
        password : this.password
      }

      try {
            const response = await fetch("http://localhost:8081", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json",
              },
              body: JSON.stringify(data),
            });
          }
          catch (error) {
            console.log(error);
          }
    },
    
  },
  
  computed : {
      displayButton: function () {     
        return this.lengthPasswordIsOk && this.lengthUserIsOk && this.pseudo != 0 && this.password != 0 ? true : false 
      }
    }
};
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
form {
  width: 20%;
  text-align: left;
}
div {
  display: flex;
  flex-direction: column;
  margin-bottom: 33px;
}
label {
  margin-bottom: 11px;
}
span {
  color: red;
  font-size: 0.7rem;
  text-align: right;
  /* margin */
}
.submit {
  width: 33%;
}
</style>
