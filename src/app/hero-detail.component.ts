import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'list-detail',
    template: `
    <div *ngIf="hero">
      <h2 class="titulo">Detalles de {{hero.name}}</h2>
      <div><label>Id: </label>{{hero.id}}</div>
      <div class="nombre">
        <label>Nombre: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
       <div><label class="estado">Estado: </label>{{hero.estado}}</div>
    </div>
    `,
    styles: [`
        .titulo {
            color: blue;
        }
        .nombre {
            color: red;
        }
        .estado {
            color: green;
        }
    `]
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}