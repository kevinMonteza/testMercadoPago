<template>
  <div 
    class=""
    style="width: 100vw; height: 100vh;position:relative"> 
    <div style="position: absolute; top: 50%; right:30%">
      <h1>Tipos de pago Mercado pago</h1>
      <div class="uk-flex uk-flex-middle uk-flex-center">
        <form 
          action="https://www.mi-sitio.com/procesar-pago" 
          method="POST">
          <script
            src="https://www.mercadopago.cl/integrations/v1/web-tokenize-checkout.js"
            data-public-key="TEST-9fd40839-e9d6-40ab-a797-7947239b4c6d"
            data-transaction-amount="100.00"/>
        </form>
      
        <div
          class="uk-flex uk-flex-around uk-flex-middle" 
          style="width: 40%">
          <button 
            class="uk-button"
            uk-toggle="target: #my-id" 
            type="button">Pago 1</button>
        </div>
      </div>

    </div>
    
    <!-- pagos modal -->
    <div 
      id="my-id" 
      uk-modal>
      <div 
        class="uk-modal-dialog uk-modal-body ">
        <div class="uk-flex uk-flex-middle uk-flex-center uk-flex-column">
          <h2 class="uk-modal-title">Formulario personalizado</h2>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Sky_Airline_2017.png" 
            alt=""
            style="width: 140px">
        </div>
        <form
          id="form-pagar-mp"
          ref="mainform"
          style="transition: all 0.4s"
          method="post" 
          @submit.prevent="generateCardToken">
          <div class="custom-input">
            <div 
              class="form-label">
              E-mail
            </div>
            <div class="form-input">
              <input
                id="email"
                value="test@test.com"
                data-checkout="email"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete="off"
                type="text" 
                placeholder="Número de Tarjeta"
                class="uk-input"
              >
            </div>
          </div>
          <div class="custom-input">
            <div 
              class="form-label">
              Tipo de documento
            </div>
            <div class="form-input">
              <select 
                id="docType" 
                data-checkout="docType">
                <option 
                  v-for="docType in documentTypes" 
                  :key="docType.id">
                  {{ docType.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="custom-input">
            <div 
              class="form-label">
              Número de Documento
            </div>
            <div class="form-input">
              <input
                id="docNumber"
                type="text"
                data-checkout="docNumber"
                placeholder="Número de Documento"
                value="71501780"
                class="uk-input"
              >
            </div>
          </div>
          <div class="custom-input">
            <div 
              class="form-label">
              Número de Tarjeta
            </div>
            <div class="form-input">
              <input
                id="cardNumber"
                value="5031755734530604"
                data-checkout="cardNumber"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete="off"
                type="text" 
                placeholder="Número de Tarjeta"
                class="uk-input"
              >
            </div>
          </div>
          <div class="custom-input">
            <div 
              class="form-label">
              Titular de la Tarjeta
            </div>
            <div class="form-input">
              <input
                id="cardholderName"
                type="text"
                value="APRO"
                data-checkout="cardholderName"
                class="uk-input"
                placeholder="Titular de la Tarjeta">
            </div>
          </div>
          <div class="custom-input">
            <div 
              class="form-label">
              Fecha de expiración
            </div>
            <div class="form-input">
              <input
                id="cardExpirationMonth"
                class="date-input uk-input"
                type="text"
                data-checkout="cardExpirationMonth"
                value="11"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete="off"
                title="Ingrese solo números"
                placeholder="MM"
                style="width:30% !important">
              <span>/</span>
              <input
                id="cardExpirationYear"
                class="date-input uk-input"
                type="text"
                data-checkout="cardExpirationYear"
                value="2025"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete="off"
                placeholder="YY"
                style="width:30% !important">
            </div>
          </div>
          <div class="custom-input">
            <div 
              class="form-label">
              CVV/CVC
            </div>
            <div class="form-input">
              <input 
                id="securityCode"
                type="text"
                data-checkout="securityCode"
                value="123"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete="off"
                class="uk-input"
                placeholder="CVV/CVC">
            </div>
          </div>
          <input 
            id="transactionAmount" 
            type="hidden" 
            name="transactionAmount" 
            value="100" >
          <input 
            id="paymentMethodId" 
            type="hidden" 
            name="paymentMethodId" >
          <input 
            id="description" 
            type="hidden" 
            name="description" >
          <div style="display:flex; margin-top: 10px">
            <button 
              class="uk-modal-close uk-button uk-button-default uk-button-small" 
              style="margin-right: 10px"
              type="button">Cancelar</button>
            <button  
              class="uk-button uk-button-default uk-button-small uk-button-primary"
              type="submit">Pagar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
var UIkit
const mercadopago = require ('mercadopago');
if (process.browser) {
  UIkit = require('uikit')
}
// SDK de Mercado Pago
export default {
data: ()=> ({
  documentTypes: [],
  global: {
    id: ''
  },
}),
async mounted(){
 
},
 async created () {
     // Agrega credenciales
      console.log("mounted -> mercadopago", mercadopago)
      mercadopago.configure({
        access_token: process.env.token
      });
      let preference = {
      items: [
        {
          title: 'Mi producto',
          unit_price: 100,
          quantity: 1,
        }
      ]
    };
    // mercadopago.preferences.create(preference)
    //     .then(function(response){
    //     // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    //       this.global.id = response.body.id;
    //     }).catch(function(error){
    //       console.log(error);
    //     });
    this.documentTypes = await this.getDocumentTypes()
  },
methods:{
    async generateCardToken () {
      let form = this.$refs.mainform
      console.log("generateCardToken -> form", form)
      try {
        // await this.$mercadopago.clearSession();
        this.cardToken = await this.createToken(form)
        this.isValid = true
        this.error = ''
     } catch(error) {
        this.error = error
        this.isValid = false
      }
    },
    async createToken (form) {
      return new Promise((resolve, reject) => {
        this.$mercadopago.createToken(form, (status, response) => {
          if (status === 200 || status === 201) {
            console.log("createToken -> response.id", response.id)
            UIkit.notification({
                message: 'Token generado con éxito' + response.id,
                status: 'primary',
                pos: 'top-right',
                timeout: 3000
            });
            resolve(response.id)
          } else {
            let message = this.$mercadopago.helpers.getMessage('card-token-creation', response)
            reject(message)
          }
        })
      })
    },
     async getDocumentTypes () {
      if (!process.browser) {
        return []
      }
      return new Promise((resolve, reject) => {
        this.$mercadopago.getIdentificationTypes((status, response) => {
          if (status === 200) {
            resolve(response)
          } else {
            reject('An error ocurred when trying to get the identification types.')
          }
        })
      })
    },
}
}
</script>

<style>
input {
  height: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  width: 90%;
}
</style>
