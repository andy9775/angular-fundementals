import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { MailService } from "./mail.service";

@NgModule({
  declarations: [AppComponent, SimpleFormComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  // providers: [MailService], // can inject directly
  // can provide name and then use the @Inject decorator (@Inject('mail'))
  providers: [
    { provide: "mail", useClass: MailService },
    // this type of approach allows us to provide custom strings for example
    // where they differ between dev, staging and production
    { provide: "api", useValue: "http://localhost:3000/" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
