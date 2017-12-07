import { Component } from '@angular/core';
import { Keg } from '../app/models/Keg';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  kegs = Keg.GetAll();
}

new Keg("Budweiser","Anheuser-Busch",4,6),
new Keg("Heineken","Heineken Holding",5,8),
new Keg("Blue Moon","MillerCoors",6,12),
new Keg("Rubbing Alcohol","Good Samaritan Regional Health",3,300)
