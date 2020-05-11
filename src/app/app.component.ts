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
      <!-- [message] is the variable inside the compnent. the square bracket syntax binds it to an outer variable of this compnent. message="outer_message" treats "outer_message" as a string
      this approach allows us to pass values to components -->
      <app-simple-form
        *ngFor="let outer_message of mail.messages"
        [message]="outer_message"
      ></app-simple-form>
    </ul>
  </div>`,
})
export class AppComponent {
  title = "Hello world!";

  // injecting the mail service
  constructor(@Inject("mail") private mail) {}
}
