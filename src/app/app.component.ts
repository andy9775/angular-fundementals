import { Component, Inject } from "@angular/core";
import { MailService } from "./mail.service";
import { inject } from "@angular/core/testing";

@Component({
  selector: "app-root",
  // can provide an inline template or a specific html template file
  // templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  template: ` <div>
    <ul>
      <!-- *ngFor allows us to iterate through the mail.messages array
            by specifying 'let message of mail.messages', message is each
            element in the array
       -->
      <li *ngFor="let message of mail.messages">{{ message }}</li>
    </ul>
  </div>`,
})
export class AppComponent {
  title = "Hello world!";

  // injecting the mail service
  constructor(@Inject("mail") private mail) {}
}
