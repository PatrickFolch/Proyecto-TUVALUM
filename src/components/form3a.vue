<template>
    <div id="form-3a">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Imagen del Producto</label>
              <div class="custom-file imf">
                <input type="file" @change="processFileC($event)" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione imagen </label>
              </div>
              <button type="button" v-on:click="anterior3a()" class="btn btn-info">Anterior</button>
              <button :disabled="someDataC===''" type="button" v-on:click="pasImgC(someDataC)" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'form3a',
  props:['pasImgC','anterior3a'],
  data() {
    return{
      someDataC:'',
    }
  },
  methods:{
    processFileC(event) {
        this.someDataC = event.target.files[0]
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
  
  .imf{
    margin:10px;
  }
</style>
