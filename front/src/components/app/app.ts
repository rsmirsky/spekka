import { Component, Vue } from 'vue-property-decorator';
import { MenuItem } from '@/models/menu_item';

@Component
export default class AppComponent extends Vue {
  bottomNav: string = 'home';

  menuItems: MenuItem[] = [
    new MenuItem('Головна','home', '/'),
    new MenuItem('Абонементи','pages', '/services'),
    new MenuItem('Ціни','person', '/biography'),
    new MenuItem('Про нас','portrait', '/blog')
  ]

  openFacebook () {
    window.open("https://www.facebook.com/remont.holodilnikov.kyiv/", "_blank");
  }
}