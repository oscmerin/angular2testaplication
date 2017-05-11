"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var INMUNISIMOS = [
    { id: 1, name: 'Julian', estado: 'Julian Garcia. Se corono en el primer y exclusivo grupo inmunisimos tras realizar varios montajes fotograficos. El salchichazo fue olvidado.' },
    { id: 2, name: 'Pedro', estado: 'Pedro Pedrosa. Permanece inmune pese a ser del Barca' },
    { id: 13, name: 'Dani A', estado: 'Daniel Gomez. En el primer grupo desde siempre. Sus constantes insultos, mofas y bulling no han hecho que salga nunca de este grupo.' }
];
var INMUNES = [
    { id: 4, name: 'Oscar', estado: 'Oscar Merino. Levantador de peso muerto oficial, causa de la cual no es inmunisimo.' },
    { id: 5, name: 'Manrique', estado: 'Alberto Manrique. Su falta de pelo ha sido el motivo principar para salir del grupo inmunisimo. Se prevee que en 2 años y a este ritmo de caida estara en el grupo de fuerisima.' },
    { id: 6, name: 'Escribano', estado: 'Alberto Martin. Su pelo pantene, al contrario que a manrique, le ha ayudado a escalar paulatinamente hasta el grupo de inmunes.' }
];
var NORMALES = [
    { id: 7, name: 'Maroto', estado: 'Raul Maroto. Anteriormente inmunisimo, descendio tras insultos y calumnias a Viren. Hizo famosa la expresion: Sexo enanal.' },
    { id: 8, name: 'Dani B', estado: 'Daniel Ayerza. Ha accedido hace relativamente poco a la lista. Fue recompensado el dia de su boda con un sobre del BBVA por parte de su dios Viren.' },
    { id: 9, name: 'Rubio', estado: 'David Rubio. Hascendido a la lista por el poco contacto tenido con Viren. Este prefiere que sus lacayos no le toquen los pies.' },
    { id: 10, name: 'Isma', estado: 'Ismael de la Fuente. Se popularizo su ascenso en la lista de Viren tras elavorar un delicioso guacamole en una de las fiestas. Se espera la siguiente edicion.' },
];
var FUERA = [
    { id: 12, name: 'Jony', estado: 'Jonathan Pedrosa. Hombre gracioso cuyas constantes bromas pesadas a Viren han logrado su paulatino descenso en su status. Se espera su siguiente broma.' },
    { id: 12, name: 'Alvarito', estado: 'Alvaro Gonzalez. Se popularizo por la expresion: donde esta mi mascota, refiriendose a Viren. Tambien conocido como hacedor de conejos.' }
];
var FUERISIMA = [
    { id: 13, name: 'Pajares', estado: 'Sergio Pajares. Alias Puto Pajaro. Archienemigo conocido numero 1 de Viren. Sus constantes bromas pesadas, insultos y canciones racistas a Viren han hecho que quede totalmente excluido de la finca.' },
    { id: 14, name: 'Montoya', estado: 'Montoya. Alias Centoyo. Sus conocidos improperios hacia la altura de Viren asi como al tamaño de su pene han hecho que se encuentre totalmente fuera de la finca y de su vida. ' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'VIREN FRIENDS LIST';
        this.inmunisimos = INMUNISIMOS;
        this.inmunes = INMUNES;
        this.normales = NORMALES;
        this.fuera = FUERA;
        this.fuerisima = FUERISIMA;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1 class=\"titulo\">{{title}}</h1>\n    <div class=\"bloqueMaster\">\n      <div class=\"bloque\" >\n        <h2>MOST VALORATED FRIENDS (Inmunisimos)</h2>\n          <ul class=\"inmunisimos\">\n            <li *ngFor=\"let hero of inmunisimos\"\n              [class.selected]=\"hero === selectedHero\"\n              (click)=\"onSelect(hero)\">\n              <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n          </ul>\n        <h2>HIGH VALORATED FRIENDS (Inmunes)</h2>\n          <ul class=\"inmunes\">\n            <li *ngFor=\"let hero of inmunes\"\n              [class.selected]=\"hero === selectedHero\"\n              (click)=\"onSelect(hero)\">\n              <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n          </ul>\n        <h2>NORMAL FRIENDS (Normales, estan dentro)</h2>\n          <ul class=\"inmunes\">\n            <li *ngFor=\"let hero of normales\"\n              [class.selected]=\"hero === selectedHero\"\n              (click)=\"onSelect(hero)\">\n              <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n          </ul>\n        <h2>EXCLUDED FRIENDS (Excluidos, estan rozando el limite o fuera)</h2>\n          <ul class=\"inmunes\">\n            <li *ngFor=\"let hero of fuera\"\n              [class.selected]=\"hero === selectedHero\"\n              (click)=\"onSelect(hero)\">\n              <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n          </ul>\n        <h2>NO FRIENDS (Desecho social a los ojos de Viren, estan fuerisima)</h2>\n          <ul class=\"fuerisima\">\n            <li *ngFor=\"let hero of fuerisima\"\n              [class.selected]=\"hero === selectedHero\"\n              (click)=\"onSelect(hero)\">\n              <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n          </ul>\n      </div>\n      <div class=\"bloque\" >\n        <list-detail [hero]=\"selectedHero\"></list-detail>\n      </div>\n    </div>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n\n    }\n    .titulo {\n      text-align: center;\n    }\n    .bloqueMaster {\n      display: table;\n    }\n    .bloque {\n      display: table-cell;\n      position: relative;\n      width: 50%;\n    }\n    .inmunisimos, .inmunes, .fuerisima {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n      display: block;\n    }\n    .inmunisimos li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .inmunes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .fuerisima li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .inmunisimos li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .inmunes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .fuerisima li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .inmunisimos li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .inmunes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .fuerisima li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .inmunisimos, .inmunes, .fuerisima .text {\n      position: relative;\n      top: -3px;\n    }\n    .inmunisimos .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: green;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n    .inmunes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n    .fuerisima .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: red;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map