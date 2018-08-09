<template>
  <div id="app">
    <div class="container-fluid ima">
      <img src="./assets/indice.png">
      <div class="titulo d-none d-md-block">
        <h1>{{ msg }}</h1>
      </div>
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
              <select id="" class="form-control">
                  <option selected>Elige...</option>
                  <option value="1">marca 1</option>
                  <option value="2">marca 2</option>
                  <option value="3">marca 3</option>
                  <option value="4">marca 4</option>
                  <option value="5">marca 5</option>
                </select>
              <button type="button" v-on:click="view='1ab'" class="btn btn-info">Anterior</button>
              <button type="button" v-on:click="view='3a'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Imagen del Producto -->
    <div class="formularios" id="form-3a" v-if="view === '3a'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Imagen del Producto</label>
              <div class="custom-file imf">
                <input type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione imagen </label>
              </div>
              <button type="button" v-on:click="view='2a'" class="btn btn-info">Anterior</button>
              <button type="button" v-on:click="view='4a'" class="btn btn-info">Siguiente</button>
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
              <input class="form-control" type="email" id="">
              <button type="button" v-on:click="view='3a'" class="btn btn-info">Anterior</button>
              <button type="button" v-on:click="view='5ab'" class="btn btn-info">Siguiente</button>
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
                    <option value="1">modelo 1a</option>
                    <option value="2">modelo 2a</option>
                    <option value="3">modelo 3a</option>
                    <option value="4">modelo 4a</option>
                    <option value="5">modelo 5a</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos>=1">
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
                      <input class="form-control" type="text">
                      <button v-on:click="checkeado=false" class="btn btn-info" type="button">Añadir</button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="marcas==='marca 2'">
                <label for="">Modelo</label>
                <select v-model="modelos" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="1">modelo 1b</option>
                    <option value="2">modelo 2b</option>
                    <option value="3">modelo 3b</option>
                    <option value="4">modelo 4b</option>
                    <option value="5">modelo 5b</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos>=1">
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
                      <input class="form-control" type="text">
                      <button v-on:click="checkeado=false" class="btn btn-info" type="button">Añadir</button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="marcas==='marca 3'">
                <label for="">Modelo</label>
                <select v-model="modelos" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="1">modelo 1c</option>
                    <option value="2">modelo 2c</option>
                    <option value="3">modelo 3c</option>
                    <option value="4">modelo 4c</option>
                    <option value="5">modelo 5c</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos>=1">
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
                      <input class="form-control" type="text">
                      <button v-on:click="checkeado=false" class="btn btn-info" type="button">Añadir</button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="marcas==='marca 4'">
                <label for="">Modelo</label>
                <select v-model="modelos" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="1">modelo 1d</option>
                    <option value="2">modelo 2d</option>
                    <option value="3">modelo 3d</option>
                    <option value="4">modelo 4d</option>
                    <option value="5">modelo 5d</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos>=1">
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
                      <input class="form-control" type="text">
                      <button v-on:click="checkeado=false" class="btn btn-info" type="button">Añadir</button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="marcas==='marca 5'">
                <label for="">Modelo</label>
                <select v-model="modelos" id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="1">modelo 1e</option>
                    <option value="2">modelo 2e</option>
                    <option value="3">modelo 3e</option>
                    <option value="4">modelo 4e</option>
                    <option value="5">modelo 5e</option>
                  </select>
                <!-- No existe modelo -->
                <div v-if="modelos>=1">
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
                      <input class="form-control" type="text">
                      <button class="btn btn-info">Añadir</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Daños -->
              <label for="">Daños Mecánicos</label>
              <select id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="0">0: bicicleta nueva</option>
                    <option value="1">1: muy poco uso</option>
                    <option value="2">2: usada</option>
                    <option value="3">3: con bastante uso</option>
                    <option value="4">4: puede necesitar algún repuesto</option>
                  </select>
              <label for="">Daños Estéticos</label>
              <select id="" class="form-control">
                    <option selected>Elige...</option>
                    <option value="0">0: bicicleta nueva</option>
                    <option value="1">1: muy poco uso</option>
                    <option value="2">2: usada</option>
                    <option value="3">3: con bastante uso</option>
                    <option value="4">4: puede necesitar algún repuesto</option>
                  </select>
              <button type="button" v-on:click="view='1ab'" class="btn btn-info">Anterior</button>
              <button type="button" v-on:click="view='3b'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Imagen del Producto -->
    <div class="formularios" id="form-3b" v-if="view === '3b'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <form>
              <label for="">Imagen del Producto</label>
              <div class="custom-file imf">
                <input type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione 1ºr imagen</label>
              </div>
              <div class="custom-file imf">
                <input type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione 2ºn imagen</label>
              </div>
              <div class="custom-file imf">
                <input type="file" class="custom-file-input" id="" lang="es">
                <label class="custom-file-label" for="">Seleccione 3ºr imagen</label>
              </div>
              <button type="button" v-on:click="view='2b'" class="btn btn-info">Anterior</button>
              <button type="button" v-on:click="view='4b'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
              <input class="form-control" type="email" id="">
              <button type="button" v-on:click="view='3b'" class="btn btn-info">Anterior</button>
              <button type="button" v-on:click="view='5ab'" class="btn btn-info">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Enviar Correo -->
    <div class="formularios" id=form-5ab v-if="view==='5ab'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group">
            <form>
              <h5>Pulse el boton para enviar el correo</h5>
              <button type="submit" class="btn btn-success">Enviar</button>
              <button type="button" v-on:click="view='1ab'" class="btn btn-info">Ir al inicio</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        precio: 0,
      }
    }
  }
</script>

<style>
  body {
    background-color: whitesmoke;
  }
  
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
    margin:30px;
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
    text-align: center;
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
    margin-bottom: 30px;
    height: 150px;
    width: 100%;
  }
  
  .titulo {
    text-align: center;
    margin: 20px;
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
  }
  .imf{
    margin:10px;
  }
</style>
