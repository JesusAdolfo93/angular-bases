import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'BATMAN';
  public age: number = 40;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHerDescription(): string {
    return `${this.name} -${this.age} `;
  }

  changeHero(): void {
    this.name = 'AQUAMAN';
  }

  changeAge() {
    this.age = 20;
  }

  resetForm():void{
    this.name = 'BATMAN';
    this.age = 40;

    document.querySelectorAll('h1')!.forEach( elemento => {
      elemento.innerHTML = '<h1>HOLA DESDE ANGULAR</h1>'
    });
  }

}
