<template>
   <v-layout column>
      <v-flex xs12>
         <v-img :src="require('@/assets/spekka-main.png')" class="header-image">
            <v-layout column text-xs-right justify-end fill-height class="header-padding">
               <span class="header-sub-text">
                  <!--Професійний досвід більше 10 років!-->
               </span>
               <h1 class="header-text primary--text">
                  Сервіс низьких цін №1
               </h1>
            </v-layout>
         </v-img>
      </v-flex>
      <v-container fluid class="content-container">
         <v-layout row wrap justify-space-between>
            <v-flex ref="whoBox" md8 xs12 mb-4>
               <h2 class="content-title primary--text mb-4"><h6>СПЕККА - європейський сервіс холодильного обладнання в Україні.
                     Помірні ціни, гарантія та швидкість з якою ми реагуємо,
                     дозволять зберегти вас від зайвого хвилювання,
                     а продукти від псування. </h6></h2>

               <template>
                  <div>
                     <v-data-table dark
                             :headers="headers"
                             :items="desserts"
                             :search="search"
                             hide-actions
                             :pagination.sync="pagination"
                             class="elevation-1"
                     >
                        <template v-slot:items="props">
                           <td>{{ props.item.name }}</td>
                           <td class="text-xs-centr">{{ props.item.calories }}</td>
                        </template>
                     </v-data-table>
                     <div class="text-xs-center pt-2">
                        <v-pagination dark v-model="pagination.page" :length="pages(pagination)"></v-pagination>
                     </div>
                  </div>
               </template>


               <v-layout justify-center>
                  <v-btn flat color="primary" to="/services">заощаджуй з абонементом</v-btn>
               </v-layout>
            </v-flex>
            <v-flex xs3 ml-3 v-if="$vuetify.breakpoint.mdAndUp" mt-4 mb-4>
               <v-layout fill-height>
                  <v-img :src="require('@/assets/photo2.jpg')" class="content-image" max-height="500"></v-img>
               </v-layout>
            </v-flex>
            <v-flex xs3 ml-3 v-if="$vuetify.breakpoint.mdAndUp" mt-4 mb-4>
               <v-layout fill-height>
                  <v-img :src="require('@/assets/photo7.jpg')" class="content-image" max-height="400"></v-img>
               </v-layout>
            </v-flex>
            <v-flex md8 xs12 mb-4>
               <h2 class="content-title primary--text mb-4 mt-4">Основні причини несправності холодильника</h2>
               <v-expansion-panel v-model="panel" expand popout>
                  <v-expansion-panel-content v-for="(item,i) in items" :key="i" v-bind:style="{'background-color': getBackground(i)}">

                     <template v-slot:header>
                        <div>{{item.title}}</div>
                     </template>
                     <v-layout
                             v-scroll:#scroll-target="onScroll"

                     >

                     <v-card>
                        <v-card-text style="white-space: pre;">{{item.text}}</v-card-text>
                     </v-card>
         </v-layout>



                  </v-expansion-panel-content>
               </v-expansion-panel>
               <v-layout justify-center>
                  <v-btn flat color="primary" to="/biography">Ціни</v-btn>
               </v-layout>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review1.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Скрипін Андрій</h2>
               <p>"Логіст, менеджер ЗЕД та талановитий маркетолог в одній особі. Завдяки Андрію, ми завжди маємо такі помірні ціни на комплектуючі та запчастини."</p>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review2.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Сас Наталія</h2>
               <p>"Фінансовий директор та співвласник з 10-и річним досвідом роботи у кращих міжнародних компаніях з обслуговування повного циклу технологічного обладнання у готельно-розважальних комплексах."</p>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review3.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Смирський Роман</h2>
               <p>"Професійний інженер енергетик, менеджер проектів та технічний спеціаліст напрямку ресторанного, і промислового обладнання."</p>
            </v-flex>
            <v-flex xs12 ma-4>
               <v-divider></v-divider>
            </v-flex>
            <v-flex md8 xs12>
               <h2 class="content-title primary--text mb-4">Зв'яжіться з нами</h2>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">надіслати повідомлення</h2>
               <v-form ref="form" lazy-validation>
                  <v-text-field v-model="name" label="ім'я" box required></v-text-field>
                  <v-text-field v-model="email" label="Пошта(Email)" box required></v-text-field>
                  <v-text-field v-model="subject" label="Тема" box required></v-text-field>
                  <v-text-field v-model="message" label="Текст повідомлення" height="200px" box required></v-text-field>
                  <v-layout v-if="$vuetify.breakpoint.mdAndUp" justify-end>
                     <v-btn raised color="primary" class="ma-0">надіслати</v-btn>
                  </v-layout>
                  <v-layout v-else justify-center>
                     <v-btn raised color="primary" >надіслати</v-btn>
                  </v-layout>
               </v-form>
            </v-flex>
            <v-flex md3 xs12 mb-5>
               <v-layout align-center justify-center fill-height>
                  <v-list style="background: transparent;">
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">location_on</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Місце знаходження
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              Київ, проспект Миру 6
                           </v-list-tile-sub-title>
                        </v-list-tile-content>
                     </v-list-tile>
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">email</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Email(пошта)
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              spekka@ukr.net
                           </v-list-tile-sub-title>
                        </v-list-tile-content>
                     </v-list-tile>
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">phone</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Телефон
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              <a href="tel:+380630594696">Зателефонувати +38 063 059 46 96</a>&thinsp;|&thinsp;
                              <a href="tel:+380660581941">+38 066 058 19 41</a>.

                              <!--+38 063 059 46 96 |
                              +38 066 058 19 41-->
                           </v-list-tile-sub-title>
                        </v-list-tile-content>
                     </v-list-tile>
                  </v-list>
               </v-layout>
            </v-flex>
         </v-layout>
      </v-container>
   </v-layout>
</template>
<script src="./home.ts"></script>
