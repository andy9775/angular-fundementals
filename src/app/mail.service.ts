import { Injectable } from "@angular/core";

@Injectable()
export class MailService {
  messages = [
    { id: 1, value: "You're now friends with John!" },
    { id: 2, value: "You have a new tweet!" },
  ];
  constructor() {}

  update(id, value) {
    this.messages = this.messages.map((m) => (m.id == id ? { id, value } : m));
  }
}
