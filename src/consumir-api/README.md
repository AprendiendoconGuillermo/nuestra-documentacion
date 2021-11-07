# Consumir Api en VuePress

## Instalación de Axios

Para poder consumir una api se debe primero instalar axios

```sh
npm install axios
```

Luego de la instalación en **package.json** deberás encontrar la siguiente dependencia de axios:

```json
"dependencies": {
    "@vuepress/plugin-back-to-top": "^1.8.2",
    "axios": "^0.24.0",
}
```
Ahora ya con la dependencia agregada podrás consumir, aquí un ejemplo de una api pública que encontré en internet

[https://api.coindesk.com/v1/bpi/currentprice.json](https://api.coindesk.com/v1/bpi/currentprice.json)

Si entras a la url aparecerá la siguiente información en forma json:

<div style="text-align:center;">
<img :src="$withBase('/img/consumo-api/api.png')" alt="Consumo de api">
</div>

## Ejemplo

En la carpeta **components** crearás un archivo **.vue** con el nombre que desees, para esta práctica se le dió el nombre de **axios.vue** .

Y dentro pondrás lo siguiente:

`Estoy consumiendo un Get`

```vue
<template>
  <div>
    {{info}}     
  </div>
</template>

<script>
import axios from 'axios';
 export default {
    data () {
      return {
        info: null,        
      }
    },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
        .catch(e => { console.log(e)})
    }
  }
</script>
```

Y ya con esto has consumido una api, felicidades sos todo un crack 😎.

Ahora ya solo te queda jugar y mostrar la información a tu gusto, como por ejemplo:

```vue
<template>
  <div>
    <table class="table">
      <thead>
          <tr>
              <th>code</th>
              <th>symbol</th>
              <th>rate</th>
          </tr>
      </thead>
      <tbody>
          <tr  v-for="(item, index) in info" :key="index">
              <td>{{item.code}}</td>
              <td>{{item.symbol}}</td>
              <td>{{item.rate}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
 export default {
    data () {
      return {
        info: null,        
      }
    },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
        .catch(e => { console.log(e)})
    }
  }
</script>
```

[Dame click para ver el consumo de la api](/pruebas/eat-api)