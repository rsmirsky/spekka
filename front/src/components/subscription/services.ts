import { Component, Vue } from 'vue-property-decorator';
import { CalendarEvent } from '@/models/calendar_event';

@Component
export default class ServiceComponent extends Vue {
  calendarId: string = "";
  apiKey: string = "";
  events: CalendarEvent[] = [];
  now: Date = new Date();
  nowString: string = "";
  name: string = "";
  email: string = "";
  service: string = "";
  date: string = "";
  time: string = "";
  message: string = "";
  onboarding: number = 0;
  datemodal: boolean = false;
  timemodal: boolean = false;
  services: object[] = [
    {
      title: 'На місяць',
      image: 'service1.jpg',
      price: '370 грн.',
      length: 'ціна за одну одиницю холодильної техніки(у місяць)',
      text: 'Безкоштовно:\n' +
          '- заправка фреоном (робота);\n' +
          '- чистка конденсатора;\n' +
          '- обслуговування електричної частини;\n' +
          '- заміна вентилятора(робота);\n' +
          '- пошук та усунення витоку холодильного агенту;\n' +
          '- ремонт дренажної системи;\n' +
          '- примусова відтайка снігової шуби;\n' +
          '- заміна компресора(робота);'

    },
    {
      title: 'На три місяці',
      image: 'service2.jpg',
      price: '350 грн.',
      length: 'ціна за одну одиницю холодильної техніки(у місяць)',
      text: 'Безкоштовно:\n' +
          '- заправка фреоном (робота);\n' +
          '- чистка конденсатора;\n' +
          '- обслуговування електричної частини;\n' +
          '- заміна вентилятора(робота);\n' +
          '- пошук та усунення витоку холодильного агенту;\n' +
          '- ремонт дренажної системи;\n' +
          '- примусова відтайка снігової шуби;\n' +
          '- заміна компресора(робота);'
    },
    {
      title: 'На півроку',
      image: 'service3.jpg',
      price: '320 грн.',
      length: 'ціна за одну одиницю холодильної техніки(у місяць)',
      text: 'Безкоштовно:\n' +
          '- заправка фреоном (робота);\n' +
          '- чистка конденсатора;\n' +
          '- обслуговування електричної частини;\n' +
          '- заміна вентилятора(робота);\n' +
          '- пошук та усунення витоку холодильного агенту;\n' +
          '- ремонт дренажної системи;\n' +
          '- примусова відтайка снігової шуби;\n' +
          '- заміна компресора(робота);'
    },
    {
      title: 'На рік',
      image: 'service4.jpg',
      price: '290 грн.',
      length: 'ціна за одну одиницю холодильної техніки(у місяць)',
      text: 'Безкоштовно:\n' +
          '- заправка фреоном (робота);\n' +
          '- чистка конденсатора;\n' +
          '- обслуговування електричної частини;\n' +
          '- заміна вентилятора(робота);\n' +
          '- пошук та усунення витоку холодильного агенту;\n' +
          '- ремонт дренажної системи;\n' +
          '- примусова відтайка снігової шуби;\n' +
          '- заміна компресора(робота);'
    }
  ];

  created() {
    this.getEvents();
    this.nowString = this.convertDate();
  }

  send() {
    console.log(this.service);
  }

  next() {
    this.now.setMonth(this.now.getMonth() + 1);
    this.nowString = this.convertDate();    
  }

  prev() {
    this.now.setMonth(this.now.getMonth() - 1);
    this.nowString = this.convertDate();
  }

  getEvents() {
    // Use the below method with your public Google Calender Id and Api Key to get events 
    // this.$http.get("https://www.googleapis.com/calendar/v3/calendars/" + this.calendarId +
    //   "/events?key=" + this.apiKey + "&timeMin=" + (new Date().toISOString()))
    //   .then(response => response.json())
    //   .then(data => {
    //     for (var i = 0; i < data["items"].length; i++) {
    //       var dateString = "date" in data["items"][i]["start"] ? data["items"][i]["start"]["date"] : data["items"][i]["start"]["dateTime"];
    //       this.events.push({
    //         title: data["items"][i]["summary"],
    //         date: dateString,
    //         open: false
    //       });
    //     }
    //   });
  }

  convertDate() {
    return this.now.getFullYear() + "-" + (this.now.getMonth() + 1) + "-"  + this.now.getDate();
  }

  get eventsMap() {
    const map: { [date: string]: CalendarEvent[]; } = {};
    this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
    return map;
  }
}