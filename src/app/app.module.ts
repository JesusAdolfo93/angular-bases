import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Modulo
import { CounterModule } from './counter/components/couter.module';
import { HeroesModule}  from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';
import { ListComponent } from './dbz/components/list/list.component';
//import { AddCharacterComponent } from './dbz/components/list/add-character/add-character.component';
//  import { HeroComponent } from './heroes/hero/hero.component';
//  import { ListComponent } from './heroes/list/list.component';
// import { CounterComponent } from './counter/components/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    // AddCharacterComponent,
    // CounterComponent,
    //  HeroComponent,
  //   ListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
