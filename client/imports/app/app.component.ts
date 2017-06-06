import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.less";

/*App-Componente für das Initieren der weiteren Komponenten. RouterOutlet wird für das Navigieren der Komponenten angewendet*/
@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent {
  constructor() {
  }
}
