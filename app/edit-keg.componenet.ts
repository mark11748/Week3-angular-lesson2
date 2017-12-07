import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="edittingKeg">
    <h3>{{edittingKeg.name}}</h3>
    <input [(ngModel)]="edittingKeg.name">
  </div>
  `
})

export class EditKegComponent {
  @Input() edittingKeg: Keg;
}
