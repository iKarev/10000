import { Component } from '@angular/core';
import { DemoComponent } from './imports/demo/demo.component';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import template from './app.component.html';

@Component({
  selector: 'app',
  template,
  directives: [DemoComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  constructor() {
  }
}
