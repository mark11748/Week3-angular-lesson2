import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  kegs = Keg.GetAll();

}

export class Keg {
  public static kegs: Keg[] = [];
  static GetAll() {
    return Keg.kegs;
  }

  vol: number;
  constructor(public name: string, public brand: string, public price:number=10, public abv:number=12.7, public maxVol:number=124) {
    this.vol = maxVol;
    Keg.kegs.push(this);
  };
}

new Keg("Budweiser","Anheuser-Busch",4,6),
new Keg("Heineken","Heineken Holding",5,8),
new Keg("Blue Moon","MillerCoors",6,12),
new Keg("Rubbing Alcohol","Good Samaritan Regional Health",3,300)
