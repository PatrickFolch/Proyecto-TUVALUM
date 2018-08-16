<template>
    <div id="form-3b">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Imagenes del Producto</label>
              <div class="custom-file imf">
                <input @change="processFileB($event)" type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="validatedCustomFile">Seleccione 1ºr imagen</label>
              </div>
              <div class="custom-file imf">
                <input @change="processFileB($event)" type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione 2ºn imagen</label>
              </div>
              <div class="custom-file imf">
                <input @change="processFileB($event)" type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione 3ºr imagen</label>
              </div>
              <button type="button" v-on:click="anterior3b()" class="btn btn-info">Anterior</button>
              <button type="button" :disabled="someDataB===''" v-on:click="pasImgB(someDataB)" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name:'form3b',
  props:['pasImgB','anterior3b'],
  data() {
    return{
      someDataB:'',
    }
  },
  methods:{
    processFileB(event) {
        this.someDataB = event.target.files[0]
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
