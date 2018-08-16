<template>
<div class="formularios" id=form-1 >
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Tipo de producto</label>
              <select v-model="select" class="form-control">
                  <option selected>Elige...</option>
                  <option value="Cascos">Cascos</option>
                  <option value="Bicicletas">Bicicletas</option>
                </select>
              <div v-if="select==='Cascos'">
                <button type="button" v-on:click="goToCascos(select)" class="btn btn-info">Siguiente</button>
              </div>
              <div v-if="select==='Bicicletas'">
                <button type="button" v-on:click="goToBicis(select)" class="btn btn-info">Siguiente</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
   name:'form1ab',
   props:['goToBicis','goToCascos'],
   data(){
    return{
        select: 'Elige...',
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
