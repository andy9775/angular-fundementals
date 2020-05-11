import { Component, Inject } from "@angular/core";
import { MailService } from "./mail.service";
import { inject } from "@angular/core/testing";

@Component({
  selector: "app-root",
  // can provide an inline template or a specific html template file
  // templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  template: ` <div>
    <app-simple-form></app-simple-form>
    {{ mail.message }}
    <br />
    {{ api }}
  </div>`,
})
export class AppComponent {
  title = "Hello world!";

  // injecting the mail service
  constructor(@Inject("mail") private mail, @Inject("api") private api) {}
}
