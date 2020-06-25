<template>
   <v-app>
      <div v-if="$vuetify.breakpoint.mdAndDown">
         <v-toolbar flat fixed scroll-off-screen class="white">
            <v-layout justify-center>
               <span class="primary--text title">Spekka</span>
            </v-layout>
            <v-menu offset-y>
               <template v-slot:activator="{ on }">
                  <v-btn flat icon color="primary" v-on="on" absolute right class="ma-0">
                     <v-icon>more_vert</v-icon>
                  </v-btn>
               </template>
               <v-list>
                  <v-list-tile>
                     <v-btn href="https://www.facebook.com/remont.holodilnikov.kyiv/" flat icon>
                        <v-img :src="require('@/assets/facebook.svg')" contain height="24"></v-img>
                     </v-btn>
                  </v-list-tile>
                  <v-list-tile>
                     <v-btn flat icon>
                        <v-img :src="require('@/assets/instagram.svg')" contain height="24"></v-img>
                     </v-btn>
                  </v-list-tile>
                  <v-list-tile>
                     <v-btn flat icon>
                        <v-img :src="require('@/assets/linkedin.svg')" contain height="24"></v-img>
                     </v-btn>
                  </v-list-tile>
               </v-list>
            </v-menu>
         </v-toolbar>
         <v-bottom-nav class="elevation-0" :active.sync="bottomNav" :value="true" fixed>
            <v-btn  v-for="item in menuItems" :key="item.title" color="teal" flat :value="item.title" :to="item.path">
               <span>{{item.title}}</span>
               <v-icon>{{item.icon}}</v-icon>
            </v-btn>
         </v-bottom-nav>
      </div>
      <v-toolbar flat fixed scroll-off-screen v-else class="white">
         <v-layout align-center justify-space-between>
            <v-toolbar-title class="primary--text">Spekka</v-toolbar-title>
            <span style="color: #03A9F4">

              <a href="tel:+380630594696">(Lifecell) +38 063 059 46 96</a>&thinsp;&thinsp;
                              <a href="tel:+380660581941">(Vodafone)+38 066 058 19 41</a>

            </span>
            <span style="color: #03A9F4"> ПН-НД з 8.00 до 22.00</span>
            <v-toolbar-items>
               <v-btn flat color="primary" v-for="item in menuItems" :key="item.title" :to="item.path">{{item.title}}</v-btn>
            </v-toolbar-items>
            <div>
               <v-btn href="https://www.facebook.com/remont.holodilnikov.kyiv/"  flat icon>
                  <v-img :src="require('@/assets/facebook.svg')" contain height="24"></v-img>
               </v-btn>
               <v-btn href="https://www.instagram.com/remont.holodilnikov.kyiv?r=nametag" flat icon>
                  <v-img :src="require('@/assets/instagram.svg')" contain height="24"></v-img>
               </v-btn>
               <v-btn href="https://www.linkedin.com/in/roman-smirsky-8b01a017b/" flat icon>
                  <v-img :src="require('@/assets/linkedin.svg')" contain height="24"></v-img>
               </v-btn>
            </div>
         </v-layout>
      </v-toolbar>
      <v-content>
         <v-slide-x-transition mode="out-in">
            <router-view></router-view>
         </v-slide-x-transition>
      </v-content>
   </v-app>
</template>
<script src="./app.ts"></script>
<style src="./app.css"></style>