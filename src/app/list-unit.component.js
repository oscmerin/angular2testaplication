"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ListUnitComponent = (function () {
    function ListUnitComponent() {
    }
    return ListUnitComponent;
}());
ListUnitComponent = __decorate([
    core_1.Component({
        selector: 'element-list',
        template: "\n    <li *ngFor=\"let hero of inmunisimos\"\n      [class.selected]=\"hero === selectedHero\"\n      (click)=\"onSelect(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </li>\n    "
    })
], ListUnitComponent);
exports.ListUnitComponent = ListUnitComponent;
//# sourceMappingURL=list-unit.component.js.map