<template>
   <v-layout column>
      <v-flex xs12>
         <v-img :src="require('@/assets/spekka-main.jpg')" class="header-image">
            <v-layout column text-xs-right justify-end fill-height class="header-padding">
               <span class="header-sub-text">
                  Професійний досвід більше 10 років!
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
               <ul>
                  <li>Холодильне обладнання</li>
                  <li>Торгове обладнання</li>
                  <li>Промислове обладнання</li>
                  <li>Комерційне обладнання</li>
                  <li>Устаткування HoReCa</li>
               </ul>
               <br>
               <p>
                  ГАРАНТІЇ<br>
                  Наша компанія надає безпрецедентні гарантії на всі види ремонтних робіт - до двох років. Це стало можливим завдяки точної діагностики та професійному підходу до ремонту.
               </p>
               <p>
                  НИЗЬКІ ЦІНИ<br>
                  Оптимальне співвідношення «ціна-якість» - запорука ефективної роботи «СПЕККА» і успіху наших клієнтів. Доступні ціни обумовлені високим професіоналізмом і оперативністю виконання робіт. </p>
               <p>
                  ЯКІСТЬ<br>
                  Запорука високої якості ремонту криється у високій кваліфікації фахівців, великому досвіді,
                  сучасної технічної бази і використанні оригінальних комплектуючих.</p>
               <v-layout justify-center>
                  <v-btn flat color="primary" to="/biography">заощаджуй з абонементом</v-btn>
               </v-layout>
            </v-flex>
            <v-flex xs3 ml-3 v-if="$vuetify.breakpoint.mdAndUp" mt-4 mb-4>
               <v-layout fill-height>
                  <v-img :src="require('@/assets/photo2.jpg')" class="content-image" max-height="400"></v-img>
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
                     <v-card>
                        <v-card-text>{{item.text}}</v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
               </v-expansion-panel>
               <v-layout justify-center>
                  <v-btn flat color="primary" to="/services">Services</v-btn>
               </v-layout>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review1.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Joe Blogss</h2>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review2.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Jane Doe</h2>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "</p>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review3.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">John Hancock</h2>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
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
                              Location
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              Cardiff, UK
                           </v-list-tile-sub-title>
                        </v-list-tile-content>
                     </v-list-tile>
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">email</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Email
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
                              Telephone
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              07000123456
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