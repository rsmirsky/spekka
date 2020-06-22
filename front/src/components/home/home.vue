<template>
   <v-layout column>
      <v-flex xs12>
         <v-img :src="require('@/assets/spekka-main.jpg')" class="header-image">
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
                           <td class="text-xs-right">{{ props.item.calories }}</td>
                           <td class="text-xs-right">{{ props.item.fat }}</td>
                           <td class="text-xs-right">{{ props.item.carbs }}</td>
                           <td class="text-xs-right">{{ props.item.protein }}</td>
                           <td class="text-xs-right">{{ props.item.iron }}</td>
                        </template>
                     </v-data-table>
                     <div class="text-xs-center pt-2">
                        <v-pagination dark v-model="pagination.page" :length="pages"></v-pagination>
                     </div>
                  </div>
               </template>

               <v-layout justify-center>
                  <v-btn flat color="primary" to="/services">заощаджуй з абонементом</v-btn>
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
                        <v-card-text style="white-space: pre;">{{item.text}}</v-card-text>
                     </v-card>
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
               <p>"Професійний інженер енергетик, менеджер проектів та технічний спеціаліст напрямку ресторанного, промислового обладнання."</p>
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
   <script>
   export default {
      data () {
         return {
            search: '',
            pagination: {},
            selected: [],
            headers: [
               {
                  text: 'Dessert (100g serving)',
                  align: 'left',
                  sortable: false,
                  value: 'name'
               },
               { text: 'Calories', value: 'calories' },
               { text: 'Fat (g)', value: 'fat' },
               { text: 'Carbs (g)', value: 'carbs' },
               { text: 'Protein (g)', value: 'protein' },
               { text: 'Iron (%)', value: 'iron' }
            ],
            desserts: [
               {
                  name: 'Frozen Yogurt',
                  calories: 159,
                  fat: 6.0,
                  carbs: 24,
                  protein: 4.0,
                  iron: '1%'
               },
               {
                  name: 'Ice cream sandwich',
                  calories: 237,
                  fat: 9.0,
                  carbs: 37,
                  protein: 4.3,
                  iron: '1%'
               },
               {
                  name: 'Eclair',
                  calories: 262,
                  fat: 16.0,
                  carbs: 23,
                  protein: 6.0,
                  iron: '7%'
               },
               {
                  name: 'Cupcake',
                  calories: 305,
                  fat: 3.7,
                  carbs: 67,
                  protein: 4.3,
                  iron: '8%'
               },
               {
                  name: 'Gingerbread',
                  calories: 356,
                  fat: 16.0,
                  carbs: 49,
                  protein: 3.9,
                  iron: '16%'
               },
               {
                  name: 'Jelly bean',
                  calories: 375,
                  fat: 0.0,
                  carbs: 94,
                  protein: 0.0,
                  iron: '0%'
               },
               {
                  name: 'Lollipop',
                  calories: 392,
                  fat: 0.2,
                  carbs: 98,
                  protein: 0,
                  iron: '2%'
               },
               {
                  name: 'Honeycomb',
                  calories: 408,
                  fat: 3.2,
                  carbs: 87,
                  protein: 6.5,
                  iron: '45%'
               },
               {
                  name: 'Donut',
                  calories: 452,
                  fat: 25.0,
                  carbs: 51,
                  protein: 4.9,
                  iron: '22%'
               },
               {
                  name: 'KitKat',
                  calories: 518,
                  fat: 26.0,
                  carbs: 65,
                  protein: 7,
                  iron: '6%'
               }
            ]
         }
      },
      computed: {
         pages () {
            if (this.pagination.rowsPerPage == null ||
                    this.pagination.totalItems == null
            ) return 0

            return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
         }
      }
   }
</script>
