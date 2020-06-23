import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BiographyComponent extends Vue {
    events: object[] = [
        {
            date: '3...6°С',
            title: 'для більшості продуктів, що зберігаються в охолодженому вигляді;',
            text: '\n' +
                'М\'ясо дрібними шматками (рагу, гуляш і ін.), Холодець (м\'ясний, рибний),\n' +
                ' заливний (м\'ясне, рибне) ..... 12 годин. hranenie produktov.jpg\n' +
                'Шашлик маринований ..... 21 годині.\n' +
                'Риба смажена і печива ..... 36 годин.\n' +
                'Молоко пастеризоване, вершки, ацидофілін ..... 36 годин\n' +
                'Сосиски ..... 48 годин.\n' +
                'ковбаси\n' +
                'варені: вищого і першого сортів ..... 48 годин\n' +
                'другого сорту ..... 24 години.\n' +
                'Ковбаси ліверні:\n' +
                'вищого і першого сортів ..... 48 годин\n' +
                'другого сорту ..... 24 години.\n' +
                'Масло вершкове ..... 72 години.\n' +
                'Овочі:\n' +
                'зелена квасоля ..... 7 ... 10 діб.\n' +
                'капуста цвітна ..... 20 ... 30 діб.\n' +
                'селера салати. .... 2 ... 3 міс.\n' +
                'капуста качана пізня ..... 3 ... 4 міс.\n' +
                'Журавлина ..... 1 ... 3 міс.'
        },
        {
            date: '5...8°С',
            title: 'охолодження фруктів та овочей',
            text: 'Яйця свіжі ..... 8 діб.\n' +
                    'Томати зрілі ..... 7 ... 10 діб.\n' +
                'Сир ..... 10 діб.\n' +
                'Дині ..... 15 діб.\n' +
                'Кабачки літні ..... 5 ... 15 діб.'
        },
        {
            date: '8...15°С',
            title: 'для м\'якого вершкового масла, напоїв та молока, що подається з холодильника відразу на стіл.',
            text: 'Баклажани ..... 7 діб.\n' +
                  'Огірки ..... 10 ... 14 діб.\n' +
                  'Перець стручковий солодкий ..... 15 ... 20 діб.\n' +
                  'Томати зелені ..... 30 діб.\n' +
                  'Шоколад ..... 6 міс.'
        },
        {
            date: '-18°С',
            title: 'Заморожування',
            text: 'фарш м\'ясний - 2 місяці\n' +
                'сосиски, сардельки тощо - 2 місяці\n' +
                'лівер (печінка, нирки і т.д.) - 3 місяці\n' +
                'біфштекси, відбивні з телятини, свинини і баранини - 6 місяців (з яловичини - 9-10 міс.)\n' +
                'м\'ясні страви, приготовлені вдома - 3-4 місяці\n' +
                'гуси, качки, зайці, кролики - 6 місяців\n' +
                'кури, індичка - 9 місяців\n' +
                'дрібна рибка - 2-3 місяці\n' +
                'рибні страви, приготовлені вдома - 3-4 місяці\n' +
                'велика риба, а так само смажена - 4-6 місяців\n' +
                'молочні продукти - 6-12 місяців (молоко пастеризоване, сир натертий на тертці, сир тільки для нетривалого зберігання. Натуральні вершки, сметана, майонез при заморожуванні згортаються)\n' +
                'гриби 5-6 місяців\n' +
                'овочі в супових наборах - 6-7 місяців, окремо - 10-12 місяців\n' +
                'ягоди і фрукти - 10-12 місяців'
        },
    ];

    skills: object[] = [
        {
            title: 'Skill One',
            rating: 4
        },
        {
            title: 'Skill Two',
            rating: 5
        },
        {
            title: 'Skill Three',
            rating: 3
        },
        {
            title: 'Skill Four',
            rating: 4
        },
    ];

    useDense() {
        if(this.$vuetify.breakpoint.smAndDown){
            return true;
        }
    }
}