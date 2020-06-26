<template>
    <v-flex xs12>
        <h2 class="content-title primary--text mb-4">Зв'яжіться з нами</h2>
        <h2 class="primary--text title font-weight-light text-uppercase mb-3">надіслати повідомлення</h2>
        <v-form ref="form" lazy-validation>
            <v-text-field v-model="name" label="ім'я" box required></v-text-field>
            <v-text-field v-model="email" label="Електронна адреса" box required></v-text-field>
            <v-text-field v-model="phone" label="Телефон" box required></v-text-field>
            <v-text-field v-model="message" label="Текст повідомлення" height="200px" box
                          required></v-text-field>
            <v-layout v-if="$vuetify.breakpoint.mdAndUp" justify-end>
                <v-btn raised color="primary" class="ma-0" v-on:click="formSubmit">надіслати</v-btn>
            </v-layout>
            <v-layout v-else justify-center>
                <v-btn raised color="primary" v-on:click="formSubmit">надіслати</v-btn>
            </v-layout>
        </v-form>
    </v-flex>
</template>

<!--<script src="./contact-us.ts"></script>-->


<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                message: '',
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
                        currentObj.output = response.data;
                    })
                    .catch(function (error) {
                        currentObj.output = error;
                    });
            }
        }
    }
</script>