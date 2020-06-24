import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeComponent extends Vue {
    $refs!: {
        whoBox: HTMLBodyElement,
        whatBox: HTMLBodyElement
    }
    items: object[] = [
        {
            title: 'Погано охолоджує',
            text:'1. Витік холодоагенту з холодильної системи.\n' +
                '2. Засмічені пластини повітряного конденсатора.\n' +
                '3. Погана циркуляція повітря.\n' +
                '4. Неправильні налаштування термостата.\n' +
                'Вжити заходи:\n' +
                '1. Відключити холодильну шафу. Викликати техніка сервісної служби для діагностики витоку і ремонту.\n' +
                '2. Відключити холодильну шафу. Прочистити пластини повітряного конденсатора.\n' +
                '3. Звільнити простір навколо холодильної шафи для вільної циркуляції повітря(не менше 7 см.)\n' +
                '4. Викликати техніка сервісної служби для зміни налаштувань термостата.'
        },
        {
            title: 'Компресор працює не відключаючись. Продукт всередині шафи замерзає.',
            text: '1. Не правильно працює термостат(або контролер) або датчик температури.\n' +
                'Вжити заходи:\n' +
                '1. Відключити холодильну шафу від мережі живлення. Викликати техніка сервісної служби для заміни пристрою.'
        },
        {
            title: 'Компресор не працює, вентилятор конденсатора працює.',
            text: 'Можливі причини:\n' +
                '\n' +
                '1. Пусковий реле компресора вийшло з ладу.\n' +
                '2. Компресор вийшов з ладу.\n' +
                'Вживані заходи:\n' +
                '1. Викликати техніка сервісної служби для проведення ремонтних робіт..'
        },
        {
            title: '\n' +
                'Шум при роботі холодильної шафи. Шум при роботі компресора. Шум при роботі вентилятора.',
            text: 'Можливі причини:\n' +
                '1. Деякі частини холодильного агрегату стикаються з корпусом холодильної шафи.\n' +
                '2. Сторонні шуми в компресорі.\n' +
                '3. Порушена фіксація мотора вентилятора або його лопатей.\n' +
                '4. Лопаті вентилятора стикаються з повітряним конденсатором.\n' +
                'Вживані заходи:\n' +
                '1. Викликати техніка сервісної служби для проведення ремонтних робіт..'
        },
    ];
    panel: boolean[] = [ true, false, false, false ];

    name: string = "";
    email: string = "";
    subject: string = "";
    message: string = "";

    getBackground(i: number){
        if(!this.panel[i]){
            return "transparent";
        }
    }

    data () {
        return {
            search: '',
            pagination: {},
            selected: [],
            headers: [
                {
                    text: 'Послуга',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Ціна (робота + запчастини)', value: 'calories' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237
                },
                {
                    name: 'Eclair',
                    calories: 262
                },
                {
                    name: 'Cupcake',
                    calories: 305
                },
                {
                    name: 'Gingerbread',
                    calories: 356
                },
                {
                    name: 'Jelly bean',
                    calories: 375
                },
                {
                    name: 'Lollipop',
                    calories: 392
                },
                {
                    name: 'Honeycomb',
                    calories: 408
                },
                {
                    name: 'Donut',
                    calories: 452
                },
                {
                    name: 'KitKat',
                    calories: 518
                }
            ]
        }
    }

    pages (p: any) {
        if (p.rowsPerPage == null ||
        p.totalItems == null
        ) return 0

        return Math.ceil(p.totalItems / p.rowsPerPage)
    }

}