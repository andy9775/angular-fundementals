import { Injectable } from "@angular/core";

@Injectable()
export class MailService {
  messages = ["You're now friends with John!", "You have a new tweet!"];
  constructor() {}
}
