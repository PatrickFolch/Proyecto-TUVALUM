<template>
    <div class="formularios" id="form-2b" v-if="view === '2b'">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <h3>Bicicletas</h3>
            <form>
              <!-- Marca -->
              <label for="">Marca</label>
              <select v-model="marcasB" id="" class="form-control">
                  <option selected>Elige...</option>
                  <option value="marca 1">marca 1</option>
                  <option value="marca 2">marca 2</option>
                  <option value="marca 3">marca 3</option>
                  <option value="marca 4">marca 4</option>
                  <option value="marca 5">marca 5</option>
                </select>
              <!-- Modelos -->
              <div v-if="marcasB==='marca 1'">
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
              <div v-if="marcasB==='marca 2'">
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
              <div v-if="marcasB==='marca 3'">
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
              <div v-if="marcasB==='marca 4'">
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
              <div v-if="marcasB==='marca 5'">
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
</template>

<script>
export default {
  name:'form2b',
  data() {
    return{
      marcasB:'Elige...',
      modelos:'Elige...',
      dañosM:'Elige...',
      dañosE:'Elige...',
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
  
  .nmodelo {
    margin: 10px;
    padding: 30px;
    border: solid 1px gray;
    border-radius: 20px;
    min-width:200px;
  }
  
</style>
