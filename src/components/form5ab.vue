<template>
      <div class="formularios" id=form-5ab v-if="view==='5ab'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <h3>Datos del formulario</h3>
              <div class="formList">
              <strong>Producto:</strong> {{select}}<br>
              <div>
                <strong>Marca:</strong> {{marcasC}}<br>
                <strong>Precio:</strong> {{precioC}}<br>
              </div>
              <div v-if="select==='Bicicletas'">
                <strong>Marca:</strong> {{marcasB}}<br>
                <strong>Modelo:</strong> {{modelos}}<br>
                <strong>Daños Mecánicos:</strong> {{dañosM}}<br>
                <strong>Daños Estéticos:</strong> {{dañosE}}<br>
                <strong>Precio:</strong> {{precioB}}<br>
              </div>
              <strong>Imagenes:</strong> {{someData}}<br>
              <strong>Email:</strong> {{email}}<br>
              </div>  
              <h5>Pulse el boton para enviar el correo</h5>
              <button type="submit" @click="enviar" class="btn btn-success">Enviar</button>
              <button type="button" v-on:click="view='1ab'" class="btn btn-info">Ir al inicio</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
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
  
  .formList{
    text-align:left;
    color:darkcyan;
    background-color: whitesmoke;
    border-radius: 20px;
    padding:30px;
    min-width: 200px;
  }
 </style>
 