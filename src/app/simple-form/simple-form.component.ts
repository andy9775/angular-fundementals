import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `
    <div>
      <p>simple-form Works!</p>
      <p>{{ hello }}</p>
    </div>
  `,
  styles: [],
})
export class SimpleFormComponent implements OnInit {
  hello = "hello world";
  constructor() {}

  ngOnInit() {}
}
