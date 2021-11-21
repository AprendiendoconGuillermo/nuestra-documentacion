<template>
  <div style="text-align:center;" class="container">
      <span style="font-size:25px">  {{ counter }} </span>
      <button class="btn btn-primary" v-on:click="counter += 1;di('Hola!, te saluda Guillermo 🤓')">Like 👍</button>       
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data () {
      return {
        counter: 0,

      }
  },
  methods: {
    di: function (mensaje) {
      alert(mensaje)       
        return  axios.post("http://10.10.90.55:9090/api-knowledge/module/insertModule",
        {
          idUser: 1,
          description: "description",
          icon: "icon",
          name: "name",
          status:"A",
        })
    }
  }
}
</script>

