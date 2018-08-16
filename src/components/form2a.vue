<template>
<div class="formularios" id="form-2a">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">
          <div class="form-group col-md-4">
            <h3>Cascos</h3>
            <form>
              <!-- Marca -->
              <label for="">Marca</label>
              <select v-model="marcasC" id="" class="form-control">
                  <option selected>Elige...</option>
                  <option value="marca 1">marca 1</option>
                  <option value="marca 2">marca 2</option>
                  <option value="marca 3">marca 3</option>
                  <option value="marca 4">marca 4</option>
                  <option value="marca 5">marca 5</option>
              </select>
              <button type="button" v-on:click="anterior2a()" class="btn btn-info">Anterior</button>
              <button :disabled="marcasC==='Elige...'" type="button" v-on:click="pasMarcaC(marcasC)" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
   </template>
    
  <script>
  export default {
    name:'form2a',
    props:['pasMarcaC','anterior2a'],
    data() {
      return{
        marcasC:'Elige...',
      }
    }
  }
  </script>
  
    
    <style>
     h1,
  h2 {
    font-weight: normal;
  }
  
  h1 {
    text-align: center;
    color: darkblue;
    margin-bottom:60px;
  }
  
  h3 {
    color: blue;
    margin: 20px;
  }
  
 h5 {
   color: blue;
   margin: 20px
 }

  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  label {
    color: aqua;
    margin: 10px;
  }
  
  .formularios{
    margin-bottom:30px;
    padding: 40px;
  }
  
  button {
    margin: 20px;
  }
  

    </style>
    