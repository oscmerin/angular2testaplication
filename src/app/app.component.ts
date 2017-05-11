import { Component } from '@angular/core';
import { Hero } from './hero';

const INMUNISIMOS: Hero[] = [
  { id: 11, name: 'Julian', estado: 'Julian Garcia. Se corono en el primer y exclusivo grupo inmunisimos tras realizar varios montajes fotograficos. El salchichazo fue olvidado.' },
  { id: 12, name: 'Pedro', estado: 'Pedro Pedrosa. Permanece inmune pese a ser del Barca'  },
  { id: 13, name: 'Dani A', estado: 'Daniel Gomez. En el primer grupo desde siempre. Sus constantes insultos, mofas y bulling no han hecho que salga nunca de este grupo.'  }
];

const INMUNES: Hero[] = [
  { id: 14, name: 'Oscar', estado: 'Oscar Merino. Levantador de peso muerto oficial, causa de la cual no es inmunisimo.'  },
  { id: 15, name: 'Manrique', estado: 'Alberto Manrique. Su falta de pelo ha sido el motivo principar para salir del grupo inmunisimo. Se prevee que en 2 años y a este ritmo de caida estara en el grupo de fuerisima.'},
  { id: 16, name: 'Escribano', estado: 'Alberto Martin. Su pelo pantene, al contrario que a manrique, le ha ayudado a escalar paulatinamente hasta el grupo de inmunes.'  }
];

const NORMALES: Hero[] = [
  { id: 17, name: 'Maroto', estado: 'Raul Maroto. Anteriormente inmunisimo, descendio tras insultos y calumnias a Viren. Hizo famosa la expresion: Sexo enanal.'  },
  { id: 18, name: 'Dani B', estado: 'Daniel Ayerza. Ha accedido hace relativamente poco a la lista. Fue recompensado el dia de su boda con un sobre del BBVA por parte de su dios Viren.'  },
  { id: 19, name: 'Rubio', estado: 'David Rubio. Hascendido a la lista por el poco contacto tenido con Viren. Este prefiere que sus lacayos no le toquen los pies.'  },
  { id: 20, name: 'Isma', estado: 'Ismael de la Fuente. Se popularizo su ascenso en la lista de Viren tras elavorar un delicioso guacamole en una de las fiestas. Se espera la siguiente edicion.'  },
];

const FUERA: Hero[] = [
  { id: 21, name: 'Jony', estado: 'Jonathan Pedrosa. Hombre gracioso cuyas constantes bromas pesadas a Viren han logrado su paulatino descenso en su status. Se espera su siguiente broma.'  },
  { id: 22, name: 'Alvarito', estado: 'Alvaro Gonzalez. Se popularizo por la expresion: donde esta mi mascota, refiriendose a Viren. Tambien conocido como hacedor de conejos.'  }
];

const FUERISIMA: Hero[] = [
  { id: 23, name: 'Pajares', estado: 'Sergio Pajares. Alias Puto Pajaro. Archienemigo conocido numero 1 de Viren. Sus constantes bromas pesadas, insultos y canciones racistas a Viren han hecho que quede totalmente excluido de la finca.'  },
  { id: 24, name: 'Montoya', estado: 'Montoya. Alias Centoyo. Sus conocidos improperios hacia la altura de Viren asi como al tamaño de su pene han hecho que se encuentre totalmente fuera de la finca y de su vida. '  }
];

@Component({
  selector: 'my-app',
  template: `
    <h1 class="titulo">{{title}}</h1>
    <div class="bloqueMaster">
      <div class="bloque" >
        <h2>MOST VALORATED FRIENDS (Inmunisimos)</h2>
          <ul class="inmunisimos">
            <li *ngFor="let hero of inmunisimos"
              [class.selected]="hero === selectedHero"
              (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>
        <h2>HIGH VALORATED FRIENDS (Inmunes)</h2>
          <ul class="inmunes">
            <li *ngFor="let hero of inmunes"
              [class.selected]="hero === selectedHero"
              (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>
        <h2>NORMAL FRIENDS (Normales, estan dentro)</h2>
          <ul class="inmunes">
            <li *ngFor="let hero of normales"
              [class.selected]="hero === selectedHero"
              (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>
        <h2>EXCLUDED FRIENDS (Excluidos, estan rozando el limite o fuera)</h2>
          <ul class="inmunes">
            <li *ngFor="let hero of fuera"
              [class.selected]="hero === selectedHero"
              (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>
        <h2>NO FRIENDS (Desecho social a los ojos de Viren, estan fuerisima)</h2>
          <ul class="fuerisima">
            <li *ngFor="let hero of fuerisima"
              [class.selected]="hero === selectedHero"
              (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>
      </div>
      <div class="bloque" >
        <list-detail [hero]="selectedHero"></list-detail>
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;

    }
    .titulo {
      text-align: center;
    }
    .bloqueMaster {
      display: table;
    }
    .bloque {
      display: table-cell;
      position: relative;
      width: 50%;
    }
    .inmunisimos, .inmunes, .fuerisima {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
      display: block;
    }
    .inmunisimos li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .inmunes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .fuerisima li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .inmunisimos li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .inmunes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .fuerisima li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .inmunisimos li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .inmunes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .fuerisima li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .inmunisimos, .inmunes, .fuerisima .text {
      position: relative;
      top: -3px;
    }
    .inmunisimos .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: green;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .inmunes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .fuerisima .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: red;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'VIREN FRIENDS LIST';
  inmunisimos = INMUNISIMOS;
  inmunes = INMUNES;
  normales = NORMALES;
  fuera = FUERA;
  fuerisima = FUERISIMA;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


