import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  // templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  template: ` <div>
    <app-simple-form></app-simple-form>
  </div>`,
})
export class AppComponent {
  title = "Hello world!";
}
