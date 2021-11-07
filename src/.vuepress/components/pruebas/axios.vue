<template>
  <div id="app">
     <!--<ul>
        <li v-for="(item, index) in info" :key="index"> 
          <b>{{item.name}}:</b> {{item.description}}
        </li>
      </ul>-->
      {{info}}
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
import axios from 'axios'
 export default {
    data () {
      return {
        info: null
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