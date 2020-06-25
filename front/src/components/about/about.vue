<template>
   <v-layout column>
      <v-flex xs12>
         <v-img :src="require('@/assets/photo4.jpg')" class="header-image">
            <v-layout column text-xs-right justify-end fill-height class="header-padding">
               <h1 class="header-text primary--text">
                  spekka
               </h1>
            </v-layout>
         </v-img>
      </v-flex>
      <v-container fluid pa-0>
         <v-tabs grow slider-color="primary">
            <v-tab ripple>
               Про нас
            </v-tab>
            <v-tab-item>
               <v-card flat color="transparent" class="content-container">
                  <v-card-title class="content-title primary--text">Більше 10 років досвіду!</v-card-title>
                  <v-layout column>
                     <v-sparkline :value="values1" :gradient="gradient" stroke-linecap="round" line-width="2" smooth padding="2"></v-sparkline>
                     <v-card-text>
                        Spekka(Спекка) - європейський сервіс холодильного обладнання в Україні.
                           <br />Помірні ціни, гарантія та швидкість з якою ми реагуємо,<br />дозволять зберегти вас від
                           зайвого хвилювання,<br />а продукти від псування.
                     </v-card-text>
                     <v-card-text>
                        ЯКІСТЬ<br />Запорука високої якості
                        ремонту криється у високій кваліфікації фахівців, великому досвіді,<br />сучасної технічної
                        бази і використанні оригінальних комплектуючих.<br />ГАРАНТІЇ<br />Наша компанія надає
                        безпрецедентні гарантії на всі види ремонтних робіт - до трьох років.<br />Це стало можливим
                        завдяки точної діагностики та професійному підходу до ремонту.<br />НИЗЬКІ ЦІНИ<br />Оптимальне
                        співвідношення &laquo;ціна-якість&raquo; - запорука ефективної роботи &laquo;Спекка&raquo; і
                        успіху наших клієнтів. <br />Доступні ціни обумовлені високим професіоналізмом і оперативністю
                        виконання робіт.
                     </v-card-text>
                  </v-layout>
               </v-card>
            </v-tab-item>
            <v-tab ripple>
               Контакти
            </v-tab>
            <v-tab-item>
               <v-card flat color="transparent" class="content-container">
                  <v-card-title class="content-title primary--text">Контакти</v-card-title>
                  <v-layout column>
                     <v-sparkline :value="values2" :gradient="gradient" gradient-direction="left" stroke-linecap="round" line-width="2" smooth padding="2"></v-sparkline>
                     <v-card-text>
                       Київ, проспект Миру 6, 02105 <br>

                     </v-card-text>
                     <v-card-text>
                        т. 063-059-46-96 <br>
                        т. 066-058-19-41
                     </v-card-text>
                  </v-layout>
               </v-card>
            </v-tab-item>
            <v-tab ripple>
               Наші клієнти
            </v-tab>
            <v-tab-item>
               <v-card flat color="transparent" class="content-container">
                  <v-card-title class="content-title primary--text">Наші клієнти</v-card-title>
                  <v-layout column>
                     <v-sparkline :value="values3" :gradient="gradient" gradient-direction="right" stroke-linecap="round" line-width="2" smooth padding="2"></v-sparkline>
                     <v-card-text>
                        Ми дуже вдячні кожному нашому клієнту за те, що він обрав саме нас! Ми раді новим клієнтам,<br>
                        які нещодавно приєдналися до нашої "родини" та тим клієнтам, які співрацюють з нами вже дуже давно!<br>
                        Нам дуже приємно, що Ви з нами і ми хочемо дарувати Вам радість та подарунки якомого частіше!
                     </v-card-text>
                     <v-card-text>
                     TAKAVA<br>
                        Компот<br>
                        АТБ<br>
                        Пивний Гусь<br>
                        Українські ковбаси<br>
                        Салтівський<br>
                        Бекон<br>
                        Арена сіті<br>
                        Шалена Бджілка<br>
                        Coffe time<br>
                        Gulliver<br>


                     </v-card-text>
                  </v-layout>
               </v-card>
            </v-tab-item>
         </v-tabs>
         <v-layout justify-center mb-5>
            <v-btn flat color="primary" to="/">на головну сторінку</v-btn>
         </v-layout>
      </v-container>
   </v-layout>
</template>
<script src="./blog.ts"></script>