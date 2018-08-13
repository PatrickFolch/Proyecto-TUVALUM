<template>
  <div id="app">
    <div class="container-fluid ima">
      <img src="./assets/indice.png">
        <h1>{{ msg }}</h1>
    </div>
    <div class="formularios" id=form-1 v-if="view === '1ab'">
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
                <button type="button" v-on:click="view='2a'" class="btn btn-info">Siguiente</button>
              </div>
              <div v-if="select==='Bicicletas'">
                <button type="button" v-on:click="view='2b'" class="btn btn-info">Siguiente</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="formularios" id="form-2a" v-if="view === '2a'">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">
          <div class="form-group col-md-4">
            <h3>Cascos</h3>
            <form>
              <!-- Marca -->
              <label for="">Marca</label>
              <select v-model="marcas" id="" class="form-control">
                  <option selected>Elige...</option>
                  <option value="marca 1">marca 1</option>
                  <option value="marca 2">marca 2</option>
                  <option value="marca 3">marca 3</option>
                  <option value="marca 4">marca 4</option>
                  <option value="marca 5">marca 5</option>
              </select>
              <button type="button" v-on:click="view='1ab'" class="btn btn-info">Anterior</button>
              <button :disabled="marcas==='Elige...'" type="button" v-on:click="view='3a'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Imagen del Producto -->
    <div id="form-3a" v-if="view === '3a'">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Imagen del Producto</label>
              <div class="custom-file imf">
                <input type="file" @change="processFile($event)" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione imagen </label>
              </div>
              <button type="button" v-on:click="view='2a'" class="btn btn-info">Anterior</button>
              <button :disabled="this.someData===''" type="button" v-on:click="view='4a'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Precio y email -->
    <div class="formularios" id="form-4a" v-if="view === '4a'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Precio</label>
              <input v-model="precio" class="form-control" type="number">
              <div class="aviso" v-if="precio>1500">
                <p>Productos similares al tuyo han sido vendios con un precio medio de 1.350 euros</p>
              </div>
              <label for="">Email</label>
              <input v-model="email" class="form-control" type="email" id="">
              <button type="button" v-on:click="view='3a'" class="btn btn-info">Anterior</button>
              <button :disabled="precio==='' || email===''" type="button" v-on:click="view='5ab'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Bicicletas -->
    <div class="formularios" id="form-2b" v-if="view === '2b'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <h3>Bicicletas</h3>
            <form>
              <!-- Marca -->
              <label for="">Marca</label>
              <select v-model="marcas" id="" class="form-control">
                  <option selected>Elige...</option>
                  <option value="marca 1">marca 1</option>
                  <option value="marca 2">marca 2</option>
                  <option value="marca 3">marca 3</option>
                  <option value="marca 4">marca 4</option>
                  <option value="marca 5">marca 5</option>
                </select>
              <!-- Modelos -->
              <div v-if="marcas==='marca 1'">
                <label for="">Modelo</label>
                <select v-model="modelos" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="modelo 1a">modelo 1a</option>
                    <option value="modelo 2a">modelo 2a</option>
                    <option value="modelo 3a">modelo 3a</option>
                    <option value="modelo 4a">modelo 4a</option>
                    <option value="modelo 5a">modelo 5a</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos!=='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="" disabled>
                    <label class="custom-control-label" for="">
                        El modelo no esta en la lista</label>
                  </div>
                </div>
                <div v-if="modelos==='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input v-model="checkeado" type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">
                        El modelo no esta en la lista</label>
                  </div>
                  <div class="nmodelo" v-if="checkeado===true">
                    <div class="form-group">
                      <label for="">Introduzca nuevo modelo</label>
                      <input v-model="nmodelo" class="form-control" type="text">
                      <button :disabled="nmodelo===''" v-on:click="checkeado=false" class="btn btn-info" type="button">Añadir</button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="marcas==='marca 2'">
                <label for="">Modelo</label>
                <select v-model="modelos" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="modelo 1b">modelo 1b</option>
                    <option value="modelo 2b">modelo 2b</option>
                    <option value="modelo 3b">modelo 3b</option>
                    <option value="modelo 4b">modelo 4b</option>
                    <option value="modelo 5b">modelo 5b</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos!=='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
                    <label class="custom-control-label" for="customCheckDisabled">El modelo no esta en la lista</label>
                  </div>
                </div>
                <div v-if="modelos==='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input v-model="checkeado" type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">El modelo no esta en la lista</label>
                  </div>
                  <div class="nmodelo" v-if="checkeado===true">
                    <div class="form-group">
                      <label for="">Introduzaca nuevo modelo</label>
                      <input v-model="nmodelo" class="form-control" type="text">
                      <button :disabled="nmodelo===''" v-on:click="checkeado=false" class="btn btn-info" type="button">Añadir</button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="marcas==='marca 3'">
                <label for="">Modelo</label>
                <select v-model="modelos" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="modelo 1c">modelo 1c</option>
                    <option value="modelo 2c">modelo 2c</option>
                    <option value="modelo 3c">modelo 3c</option>
                    <option value="modelo 4c">modelo 4c</option>
                    <option value="modelo 5c">modelo 5c</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos!=='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
                    <label class="custom-control-label" for="customCheckDisabled">El modelo no esta en la lista</label>
                  </div>
                </div>
                <div v-if="modelos==='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input v-model="checkeado" type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">El modelo no esta en la lista</label>
                  </div>
                  <div class="nmodelo" v-if="checkeado===true">
                    <div class="form-group">
                      <label for="">Introduzca nuevo modelo</label>
                      <input v-model="nmodelo" class="form-control" type="text">
                      <button :disabled="nmodelo===''" v-on:click="checkeado=false" class="btn btn-info" type="button">Añadir</button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="marcas==='marca 4'">
                <label for="">Modelo</label>
                <select v-model="modelos" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="modelo 1d">modelo 1d</option>
                    <option value="modelo 2d">modelo 2d</option>
                    <option value="modelo 3d">modelo 3d</option>
                    <option value="modelo 4d">modelo 4d</option>
                    <option value="modelo 5d">modelo 5d</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos!=='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
                    <label class="custom-control-label" for="customCheckDisabled">El modelo no esta en la lista</label>
                  </div>
                </div>
                <div v-if="modelos==='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input v-model="checkeado" type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">El modelo no esta en la lista</label>
                  </div>
                  <div class="nmodelo" v-if="checkeado===true">
                    <div class="form-group">
                      <input v-model="nmodelo" class="form-control" type="text">
                      <button :disabled="nmodelo===''" v-on:click="checkeado=false" class="btn btn-info" type="button">Añadir</button>
                     </div>
                  </div>
                </div>
              </div>
              <div v-if="marcas==='marca 5'">
                <label for="">Modelo</label>
                <select v-model="modelos" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="modelo 1e">modelo 1e</option>
                    <option value="modelo 2e">modelo 2e</option>
                    <option value="modelo 3e">modelo 3e</option>
                    <option value="modelo 4e">modelo 4e</option>
                    <option value="modelo 5e">modelo 5e</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos!=='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
                    <label class="custom-control-label" for="customCheckDisabled">El modelo no esta en la lista</label>
                  </div>
                </div>
                <div v-if="modelos==='Elige...'">
                  <div class="custom-control custom-checkbox">
                    <input v-model="checkeado" type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">El modelo no esta en la lista</label>
                  </div>
                  <div class="nmodelo" v-if="checkeado===true">
                    <div class="form-group">
                      <label for="">Introduzca nuevo modelo</label>
                      <input v-model="nmodelo" class="form-control" type="text">
                      <button :disabled="nmodelo===''" v-on:click="checkeado=false" class="btn btn-info" type="button">Añadir</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Daños -->
              <label for="">Daños Mecánicos</label>
              <select v-model="dañosM" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="0">0: bicicleta nueva</option>
                    <option value="1">1: muy poco uso</option>
                    <option value="2">2: usada</option>
                    <option value="3">3: con bastante uso</option>
                    <option value="4">4: puede necesitar algún repuesto</option>
                  </select>
              <label for="">Daños Estéticos</label>
              <select v-model="dañosE" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="0">0: bicicleta nueva</option>
                    <option value="1">1: muy poco uso</option>
                    <option value="2">2: usada</option>
                    <option value="3">3: con bastante uso</option>
                    <option value="4">4: puede necesitar algún repuesto</option>
                  </select>
              <button type="button" v-on:click="view='1ab'" class="btn btn-info">Anterior</button>
              <button type="button" :disabled="marcas==='Eliges...'||modelos==='Elige...'||dañosM==='Elige...'||dañosE==='Elige...'" v-on:click="view='3b'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Imagen del Producto -->
    <div id="form-3b" v-if="view === '3b'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Imagenes del Producto</label>
              <div class="custom-file imf">
                <input @change="processFile($event)" type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="validatedCustomFile">Seleccione 1ºr imagen</label>
              </div>
              <div class="custom-file imf">
                <input @change="processFile($event)" type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione 2ºn imagen</label>
              </div>
              <div class="custom-file imf">
                <input @change="processFile($event)" type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione 3ºr imagen</label>
              </div>
              <button type="button" v-on:click="view='2b'" class="btn btn-info">Anterior</button>
              <button type="button" :disabled="someData===''" v-on:click="view='4b'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Precio y Email -->
    <div class="formularios" id="form-4b" v-if="view === '4b'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Precio</label>
              <input v-model="precio" class="form-control" type="number">
              <div class="aviso" v-if="precio>1500">
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
    <!-- Enviar Correo -->
    <div class="formularios" id=form-5ab v-if="view==='5ab'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <h3>Datos del formulario</h3>
              <div class="formList">
              <strong>Producto:</strong> {{select}}<br>
              <strong>Marca:</strong> {{marcas}}<br>
              <div v-if="select==='Bicicletas'">
                <strong>Modelo:</strong> {{modelos}}<br>
                <strong>Daños Mecánicos:</strong> {{dañosM}}<br>
                <strong>Daños Estéticos:</strong> {{dañosE}}<br>
              </div>
              <strong>Imagenes:</strong> {{someData}}<br>
              <strong>Precio:</strong> {{precio}}<br>
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
        marcas: 'Elige...',
        modelos: 'Elige...',
        checkeado: false,
        nmodelo:'',
        precio:'',
        email:'',
        dañosM:'Elige...',
        dañosE:'Elige...',
        someData:'',
      }
    },
    methods:{
      processFile(event) {
    this.someData = event.target.files[0]
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
