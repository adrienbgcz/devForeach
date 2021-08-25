<template>
  <main>
    <div v-if="loading" class="loader"></div>
    <div v-else>
      <form @submit.prevent="postData">
        <div v-for="item in formData" :key="item.id">
          <p>{{ item.question }}</p>

          <div v-if="item.type == 'text'">
            <input v-model="item.ref" type="text" />
          </div>

          <div v-if="item.type == 'checkbox'">
            <div v-for="(response, index) in item.responses" :key="index">
              <input
                v-model="item.ref"
                type="checkbox"
                :id="'checkbox' + index"
                :value="response"
              />
              <label :for="'checkbox' + index">{{ response }}</label>
            </div>
            <br />
          </div>

          <div v-if="item.type == 'radio'">
            <div v-for="(response, index) in item.responses" :key="index">
              <input
                v-model="item.ref"
                type="radio"
                :id="'radio' + index"
                :value="response"
              />
              <label :for="'radio' + index">{{ response }}</label>
            </div>
            <br />
          </div>

          <select v-model="item.ref" v-if="item.type == 'select'">
            <option disabled value="">Choisissez</option>
            <option v-for="response in item.responses" :key="response">
              {{ response }}
            </option></select
          ><br />

          <div v-if="item.type == 'date'">
            <input type="date" v-model="item.ref" />
          </div>

          <div v-if="item.type == 'textarea'">
            <textarea rows="10" cols="50" v-model="item.ref"></textarea>
          </div>
        </div>

        <input type="submit" value="Valider" />
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      formData: [],
      loading: null
    };
  },
  created: function () {
    this.loading = true
    this.getData();
  },
  methods: {
    getData: async function () {
      try {
        const response = await fetch("http://localhost:3000/fields");
        const data = await response.json();
        this.formData = data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },

    postData: async function () {
      let dataArray = [];

      this.formData.forEach((item) => {
        let data = {
          question: item.id,
          answer: item.ref,
        };

        dataArray.push(data);
      });

      try {
        const response = await fetch("toto", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(dataArray),
        });
      } catch (error) {
        console.log(error);
      }
    },
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
  margin-top: 60px;
}

.loader {
  background: url('assets/loader.gif') 50% 50% no-repeat rgba(255, 255, 255, 0.8);
  cursor: wait;
	height: 100%;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 9999;
}
</style>
