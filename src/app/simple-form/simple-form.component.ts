import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `
    <div>
      <!-- access fields onthe class and display them -->
      <div>{{ hello }}</div>
      <!-- #myInput is ref to the input -->
      <input #myInput type="text" />

      <!-- (click) specifies the event handler -->
      <!-- onClick(myInput.value) allows us to get the value of the input 'myInput' since myInput is the reference to <input> -->
      <button (click)="onClick(myInput.value)">click me</button>
    </div>
  `,
  styles: [],
})
export class SimpleFormComponent implements OnInit {
  hello: string;

  onClick(value: string) {
    console.log(`got: ${value}`);
  }

  constructor() {}

  ngOnInit() {
    // set the field when the component is initialized which then gets displayed
    this.hello = "hello world!";
  }
}
