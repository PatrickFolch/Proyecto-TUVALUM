<template>
  <div id="app">
    <div class="container-fluid ima">
      <img src="./assets/indice.png">
        <h1>{{ msg }}</h1>
    </div>
    <!-- componente 1ab -->
    <form1ab v-if="view === '1ab'"  :goToCascos="goToCascos" :goToBicis="goToBicis"/>
    <!-- componente 2a -->
    <form2a v-if="view === '2a'" :pasMarcaC="pasMarcaC" :anterior2a="anterior2a" />
    <!-- componente 2b -->
    <form2b v-if="view === '2b'" :pasMMyD="pasMMyD" :anterior2b="anterior2b" />
    <!-- componente 3a -->
    <form3a v-if="view === '3a'" :pasImgC="pasImgC" :anterior3a="anterior3a" />
    <!-- componente 3b -->
    <form3b v-if="view === '3b'" :pasImgB="pasImgB" :anterior3b="anterior3b" />
    <!-- componente 4a -->
    <form4a v-if="view === '4a'" :pasPyE_A='pasPyE_A' :anterior4a="anterior4a" />
    <!-- componente 4b -->
    <!-- Precio y Email -->
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
    <!-- componente 5ab -->
    <!-- Enviar Correo -->
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
  </div>
</template>

<script>
// (function() {
//   emailjs.init("user_ZQ18rSFkZNAwUPRKaUBVv")
// }) 
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Proyecto Tuvalum',
        view: '1ab',
        select: 'Elige...',
        marcasC: 'Elige...',
        marcasB:'Elige...',
        modelos: 'Elige...',
        checkeado: false,
        nmodelo:'',
        precioC:'',
        precioB:'',
        emailC:'',
        emailB:'',
        dañosM:'Elige...',
        dañosE:'Elige...',
        someDataC:'',
        someDataB:'',
      }
    },
    methods:{
      goToCascos(selection){
        this.select = selection;
        this.view = '2a'
      },
       goToBicis(selection){
        this.select = selection;
        this.view = '2b'
      },
      pasMarcaC(marcaC){
        this.marcasC = marcaC;
        this.view = '3a'
      },
      anterior2a(){
        this.view = '1ab'
      },
      pasImgC(imgC){
        this.someDataC = imgC;
        this.view = '4a'
      },
      anterior3a(){
        this.view = '2a'
      },
      pasPyE_A(coste,correo){
        this.precioC = coste;
        this.emailC = correo;
        this.view = '5ab'
      },
      anterior4a(){
        this.view = '3a'
      },
      pasMMyD(marcaB,modelo,dañoM,dañoE){
        this.view = '3b'
        this.marcasB = marcaB;
        this.modelos = modelo;
        this.dañosM = dañoM;
        this,dañosE = dañoE;
      },
      anterior2b(){
        this.view = '1ab'
      },
      pasImgB(imgB){
          this.someDataC = imgB;
          this.view = '4b'
      },
      anterior3b(){
        this.view = '2b'
      }  
    }
    // INTENTO DE ENVIO DE CORREO
    // methods:{
    //   enviar(){
    //     let data = {
    //       slect:this.select,
    //       marcas:this.marcas,
    //       modelos:this.modelos,
    //       precio:this.precio,
    //       email:this.email,
    //       dañosM:this.dañosM,
    //       dañosE:this.dañosE,
    //    };
    //    emailjs.send("gmail","form_contacto",data)
    //    .then(function(response) {
    //      if(resonse.text === 'OK') {
    //        alert ('El correo se ha enviado de forma exitosa');
    //      }
    //      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
       
         
    //    }, function(err) {
    //      alert('Ocurrio un problema al enviar el correo');
    //      console.log("FAILED. error=", err);
         
    //    });
    //   }
    // }
  }
</script>

<style>
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
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
  
  img {
    height: 150px;
  }
    
  .ima {
    text-align: center;
    background-color: white;
    max-height: 200px;
    margin-bottom:100px;
    height: 150px;
    width: 100%;
  }
  
  .aviso {
    margin: 10px;
    padding: 10px;
    background-color: cadetblue;
    color: white;
    border-radius: 20px;
  }
  
  .nmodelo {
    margin: 10px;
    padding: 30px;
    border: solid 1px gray;
    border-radius: 20px;
    min-width:200px;
  }
  .imf{
    margin:10px;
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
