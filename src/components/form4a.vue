<template>
    <div class="formularios" id="form-4a" >
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Precio</label>
              <input v-model="precioC" class="form-control" type="number">
              <div class="aviso" v-if="precioC>1500">
                <p>Productos similares al tuyo han sido vendios con un precio medio de 1.350 euros</p>
              </div>
              <label for="">Email</label>
              <input v-model="emailC" class="form-control" type="email" id="">
              <button type="button" v-on:click="anterior4a()" class="btn btn-info">Anterior</button>
              <button :disabled="precioC==='' || emailC===''" type="button" v-on:click="pasPyE_A(precioC,emailC)" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'form4a',
  props:['pasPyE_A','anterior4a'],
  data() {
    return{
      precioC:'',
      emailC:'',
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
  

  
  .aviso {
    margin: 10px;
    padding: 10px;
    background-color: cadetblue;
    color: white;
    border-radius: 20px;
  }
  
</style>
