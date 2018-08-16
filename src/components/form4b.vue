<template>
    <div class="formularios" id="form-4b" v-if="view === '4b'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Precio</label>
              <input v-model="precioB" class="form-control" type="number">
              <div class="aviso" v-if="precioB>1500">
                <p>Productos similares al tuyo han sido vendidos con un precio medio de 1.350 euros</p>
              </div>
              <label for="">Email</label>
              <input v-model="email" class="form-control" type="email" id="">
              <button type="button" v-on:click="view='3b'" class="btn btn-info">Anterior</button>
              <button :disabled="precio==='' || email===''" type="button" v-on:click="view='5ab'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name:'form4b',
  data() {
    return{
      precioB:'',
      email:'',
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
