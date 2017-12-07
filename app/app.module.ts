import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KegListComponent }  from './keg-list.component';
import { EditKegComponent }  from './edit-keg.componenent';
import { NewKegComponent }  from './new-keg.componenent';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KegListComponent, EditKegComponent, NewKegComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
