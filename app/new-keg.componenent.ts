import {Component, Output, EventEmitter} from '@angular/core';
import {Keg} from './Keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div>
    <p>Plese enter name:</p>
    <input type="text" val="UNSET" #nameNew>
    <p>Plese enter brand:</p>
    <input type="text" val="UNSET" #brandNew>
    <p>Plese enter price:</p>
    <input type="number" min="0" val="0" #priceNew>
    <p>Plese enter alcohol by volume:</p>
    <input type="number" min="0" val="12" #abvNew>
    <p>Plese enter Volume(pints):</p>
    <input type="number" min="0" val="124" #maxVolNew>
    <button (click) = "clickAddKeg(nameNew.value, brandNew.value, priceNew.value, abvNew.value, maxVolNew.value)" >ADD</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() sendAddKeg = new EventEmitter();

  clickAddKeg(
    nameNew: string,
    brandNew: string,
    priceNew: number,
    abvNew: number,
    maxVolNew: number
  )
  {
    let newKeg = new Keg(nameNew, brandNew, priceNew, abvNew, maxVolNew);
    this.sendAddKeg.emit(newKeg);
  }
}
