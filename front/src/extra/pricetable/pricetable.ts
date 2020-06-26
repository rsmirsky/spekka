import {Component, Vue} from 'vue-property-decorator';

@Component
export default class priceTable extends Vue {

    data() {
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
                {text: 'Ціна (робота + запчастини)', value: 'calories'},
            ],
            desserts: [
                {
                    name: 'виклик сервіс-інженера (з урахуванням ремонту)',
                    calories: '190 грн.'
                },
                {
                    name: 'виклик сервіс-інженера (тільки діагностика)',
                    calories: '290 грн.'
                },
                {
                    name: 'дозаправка холод. агента(фреону) Промислові',
                    calories: 'від 590 грн.'
                },
                {
                    name: 'дозаправка холод. агента(фреону) Побутові',
                    calories: 'від 350 грн.'
                },
                {
                    name: 'чистка конденсатора від бруду, жиру, пуху ',
                    calories: '375 грн./од'
                },
                {
                    name: 'заміна вентилятора конденсатора',
                    calories: '670 грн.'
                },
                {
                    name: 'пошук та усунення витоку фреону(пайка)',
                    calories: '700 грн.'
                },
                {
                    name: 'заміна контролера',
                    calories: 'від 900 грн.'
                },
                {
                    name: 'заміна датчика температури',
                    calories: '490 грн.'
                },
                {
                    name: 'заміна лампи(довгі люмінесцентні)',
                    calories: 'від 250 грн.'
                },
                {
                    name: 'безпечна мийка холодильного обладнання ',
                    calories: '420 грн./од.'
                },
                {
                    name: 'повне технічне обслуговування кондиціонера',
                    calories: '590 грн.'
                },
                {
                    name: 'заміна ТЕН-а відтайки',
                    calories: 'від 600 грн.'
                },
                {
                    name: 'заміна капілярної трубки(+фільтр)',
                    calories: 'від 920 грн.'
                },
                {
                    name: 'заміна термо-регулюючого вентиля (ТРВ)',
                    calories: 'від 700 грн.'
                },
                {
                    name: 'вирівнювання ребер(ламелі) конденсатора',
                    calories: '470 грн./од.'
                },
                {
                    name: 'ізоляція труб (K-FLEX)',
                    calories: '380 грн./м'
                },
                {
                    name: 'установка заправного клапана (Шредер)',
                    calories: '370 грн.'
                },
                {
                    name: 'заміна компресора',
                    calories: 'від 1800 грн.'
                }
            ]
        }
    }

    pages(p: any) {
        if (p.rowsPerPage == null ||
            p.totalItems == null
        ) return 0

        return Math.ceil(p.totalItems / p.rowsPerPage)
    }
}