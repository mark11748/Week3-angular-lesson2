import { Component} from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <keg-list
      [childKegList]="masterKegList"
      (sendSellKeg)="sellKeg($event)"
      (sendEditKeg)="editKeg($event)"
    ></keg-list>
    <edit-keg
      [edittingKeg]="masterEdittingKeg"
    ></edit-keg>
    <new-keg
      (sendAddKeg) = "addKeg($event)"
    >
    </new-keg>
  </div>
  `
})

export class AppComponent {
  masterEdittingKeg: Keg;

  masterKegList: Keg[] = Keg.getAll();

  sellKeg(keg: Keg) {
    this.masterKegList.length > 1 ? this.masterKegList.splice(keg.id, 1) : this.masterKegList = [];
  }

  editKeg(keg: Keg) {
    this.masterEdittingKeg = keg;
  }
  addKeg(keg)
  {
    keg.save();
  }
}
