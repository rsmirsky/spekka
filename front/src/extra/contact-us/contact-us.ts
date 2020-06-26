import {Component, Vue} from 'vue-property-decorator';

@Component
export default class contactUs extends Vue {
    name: string = "";
    email: string = "";
    phone: string = "";
    message: string = "";
}