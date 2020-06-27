<template>
    <v-flex xs12>
        <h2 class="content-title primary--text mb-4">Зв'яжіться з нами</h2>
        <h2 class="primary--text title font-weight-light text-uppercase mb-3">надіслати повідомлення</h2>
        <v-form ref="form" lazy-validation>
            <v-text-field v-model="name" label="ім'я" v-bind:readonly="answer!=null" box required></v-text-field>
            <v-text-field v-model="email" label="Електронна адреса" v-bind:readonly="answer!=null" box
                          required></v-text-field>
            <v-text-field v-model="phone" label="Телефон" v-bind:readonly="answer!=null" box required></v-text-field>
            <v-text-field v-model="message" label="Текст повідомлення" v-bind:readonly="answer!=null" height="200px" box
                          required></v-text-field>
            <v-layout v-if="answer!=null" class="right">
                <span>{{answer}}</span>
            </v-layout>
            <v-layout v-else justify-end>
                <v-btn raised color="primary" class="ma-0" v-on:click="formSubmit">надіслати</v-btn>
            </v-layout>
        </v-form>
    </v-flex>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                name: null,
                email: null,
                phone: null,
                message: null,
                answer: null,
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('/contact-us', {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message
                })
                    .then(function (response) {
                        currentObj.answer = "Ваше повідомлення було надіслано!"
                        currentObj.output = response.data;
                    })
                    .catch(function (error) {
                        currentObj.answer = "Сталася помилка :( \n"
                        console.log(error);
                    });
            }
        }
    }
</script>