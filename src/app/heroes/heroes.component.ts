import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Hero}
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

heroes = [{id:1,name:"Abc"},{id:2,name:"Xyz"},{id:3,name:"pqr"}];

hero:any={id:4,name:"xyz"};

onClick(hero:any)
{
console.log(hero.id);
console.log(hero.name);
}

}
