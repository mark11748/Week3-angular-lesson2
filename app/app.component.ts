import { Component} from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <keg-list
      [childKegList]="masterKegList"
      (sendSellKeg)="sellKeg($event)"
    ></keg-list>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Budweiser","Anheuser-Busch",4,6),
    new Keg("Heineken","Heineken Holding",5,8),
    new Keg("Blue Moon","MillerCoors",6,12)
  ]

  sellKeg(keg: Keg) {
    this.masterKegList.length > 1 ? this.masterKegList.splice(keg.id, 1) : this.masterKegList = [];
  }
}
