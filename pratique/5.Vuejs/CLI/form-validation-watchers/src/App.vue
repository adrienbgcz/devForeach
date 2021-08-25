<!-- <template>
  <div id="app">
    <form action="">
      <div>
        <label for="name">Nom d'utilisateur</label>
        <input v-model="username" type="text" name="username" required />
        <span v-if="msg.username">{{ msg.username }}</span>

        <label for="password">Mot de Passe</label>
        <input v-model="password" type="text" name="password" required/>
        <span v-if="msg.password">{{ msg.password }}</span>

        <input type="submit" class="submit" :disabled="isDisabled" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "App",
  data:function() {
    return {
      username: "",
      password: "",
      msg: [],

      // isDisabled: true
    };
  },
  computed: {
    isDisabled: function() {
      if(this.username.length >=3 && this.username.length <=8 && this.password.length >=3 && this.password.length <=8) return false
      else return true
    }
  },
  watch: {
    username: function(value) {
      this.username = value;
      this.validateUsername(value);
    },
    password: function(value) {
      this.password = value;
      this.validatePassword(value)
    }
  },
  methods: {
    validateUsername(value) {
      if (value.length < 3) {
        this.msg['username'] = 'Trop court'
        console.log(this.msg)
      } else if (value.length > 8) {
        this.msg['username'] = 'Trop long'
      } else {
        this.msg['username'] = ""
      }
    },
    validatePassword(value) {
      if (value.length < 3) {
        this.msg['password'] = 'Trop court'
        console.log(this.msg)
      } else if (value.length > 8) {
        this.msg['password'] = 'Trop long'
      } else {
        this.msg['password'] = ""
      }
    },
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
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

-->




<template>
  <div id="app">
    <form @submit.prevent="postData">
      
      <label for="pseudo">Nom utilisateur</label>
      <input v-model="pseudo" type="text" name="pseudo" id="pseudo" />
      <span>{{ message }}</span><br/>
     

      <label for="pass">Mot de passe</label>
      <input v-model="password" type="password" name="pass" id="pass"  />
      <span>{{ message }}</span><br/>
      
      
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
      message: ""
      
    };
  },

  watch: {
    pseudo: function(value) {
        this.pseudo = value
        displayMessage(value)
    },
    password: function(value) {
        this.password = value
        displayMessage(value)
    }

    },

  methods: {
    displayMessage: function (value) {
      
      if (value < 4) {
        this.message = "Trop court"
      }
      if (value > 8) {
        this.message = "Trop long"
      }
      if ((value >=4 && value <= 8) || value == 0) {
        this.message = ""

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
