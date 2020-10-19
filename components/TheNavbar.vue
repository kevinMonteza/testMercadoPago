<template>
  <div>
    <!-- Navbar for desktop -->
    <div
      uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-position-absolute uk-width-1-1; top: 80vh;" 
      style="">
      <nav 
        class=" uk-navbar-container uk-position-absolute uk-width-1-1  uk-navbar-center navStyle"
        style="z-index: 1000;"
        uk-navbar>
        <div 
          class="uk-navbar-left">
          <a 
            class="uk-navbar-item uk-logo"
            @click="goTo('#Portrait', '¿Cómo Funciona?')">
            <img 
              :src="logo"
              style="height:50px; width: 80px;" 
              alt="Logo"></a>
        </div>
        <div class="uk-navbar-right uk-visible@l">
          <div 
            v-for="(section, key) in sections"
            :key="key"  
            class="uk-navbar-item navItemStyle">
            <a 
              class="textElementsNav"
              @click="goTo(`${section.url}`, `${section.name}`)">{{ section.name }}</a>
          </div>
        </div>
        <div 
          class="uk-navbar-right uk-hidden@l">
          <a
            class="uk-navbar-toggle" 
            uk-navbar-toggle-icon
            uk-toggle="target: #offcanvas-nav-primary"
            style="color:white !important"
            href="#offcanvas-nav-primary"/>
        </div>
      </nav>
    </div>

    <div 
      id="offcanvas-nav-primary"
      class="uk-hidden@l"
      uk-offcanvas="flip:true overlay: true">
      <div class="uk-offcanvas-bar uk-flex uk-flex-column">
        <a
          class="uk-navbar-toggle" 
          uk-navbar-toggle-icon
          uk-toggle="target: #offcanvas-nav-primary"
          style="color:white !important; justify-content:flex-end !important;"/>
        <ul class="uk-nav uk-nav-primary uk-nav-center">
          <li
            v-for="(section, key) in sections"
            :key="key"
            style="justify-content:end !important;"
            class="uk-navbar-item navOffCanvasElementStyle">
            <a 
              class="textElementsNav navOffCanvasTextStyle"
              @click="goTo(`${section.url}`, `${section.name}`)">{{ section.name }}</a>
          </li>
        </ul>
      </div>
    </div>


  </div>  
</template>

<script>

var UIkit

if (process.browser) {
  UIkit = require('uikit')
}

export default {
  props:{
    logo:{
      type:String,
      default: function(){
        return{message:"hola hola logo"}
      }
    }
  },
  data(){
    return{
      sections:[
        {name:'Portrait', url:'#Portrait'},
        {name:'Section 1', url:'#Section1'},
        {name:'Section 2', url:'#Section2'},
        {name:'Section 3', url:'#Section3'},
        {name:'Section 4', url:'#Section4'},
        {name:'Section 5', url:'#Section5'},
        {name:'Section 6', url:'#Section6'},
        {name:'Section 7', url:'#Section7'}
      ]
    }
  },
  methods: {
    goTo (section, label) {
      
      UIkit.offcanvas('#offcanvas-nav-primary').hide().then(() => {
        //Validate screeen size
        UIkit.scroll({offset: 80}).scrollTo(section)
      })

      // if (window.outerWidth > 960){
      //   UIkit.offcanvas('#offcanvas-nav-primary').hide().then(() => {
      //   //Validate screeen size
      //     UIkit.scroll({offset: 80}).scrollTo(section)
      //   })
      // }
      // else{
      //   UIkit.offcanvas('#offcanvas-nav-primary').hide().then(() => {
      //   //Validate screeen size
      //     UIkit.scroll({offset: 0}).scrollTo(section)
      //   })
      // }

    }
  }
}
</script>

<style>
  .navStyle {
    background: rgba(0,0,0,0.5) !important;
    background-color: transparent
  }

  .navItemStyle {
    margin-right: 2em;
  }

  .textElementsNav {
    font-weight: bolder;
    color: aliceblue;
    font-size: 17.5px;
  }
  .navOffCanvasElementStyle {
    padding: 1em;
    min-height: 0px !important;
  }
  .navOffCanvasTextStyle {
    color: white !important;
    font-size: 12px !important;
    text-transform: uppercase;
    min-height: 0px !important;
  }
  .uk-sticky-placeholder{
    height: 0px;
  }
</style>
