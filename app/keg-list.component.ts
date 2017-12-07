import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let keg of childKegList" class="panel pnl-default">
    <div class = "pnl-header">
    <h3>{{keg.name}}</h3>
    </div>
    <p>Status: {{keg.vol / keg.maxVol * 100}}%</p>
    <p>Alcohol Content: {{keg.abv}}%</p>
    <button class="bnt btn-primary" (click)=clickEditKeg(keg)>Edit</button>
    <button class="bnt btn-warning" (click)=clickSellKeg(keg)>Sell</button>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() sendSellKeg = new EventEmitter();
  @Output() sendEditKeg = new EventEmitter();

  clickSellKeg(keg: Keg) {
    this.sendSellKeg.emit(keg);
  }

  clickEditKeg(keg: Keg) {
    this.sendEditKeg.emit(keg);
  }
}
