import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `
    <div>
      <!-- access fields onthe class and display them -->
      <div>{{ hello }}</div>
      <div>{{ message }}</div>
      <!-- #myInput is ref to the input -->
      <input #myInput type="text" />

      <!-- (click) specifies the event handler -->
      <!-- onClick(myInput.value) allows us to get the value of the input 'myInput' since myInput is the reference to <input> -->
      <!-- onClick($event) gives us access to mouse events. event gets passed to the handler function -->
      <!-- (mouseover) calls the event handler when we drag the mouse over the button -->
      <button
        (mouseover)="onMouseOver($event)"
        (click)="onClick($event, myInput.value)"
      >
        click me
      </button>
    </div>
  `,
  styles: [],
})
export class SimpleFormComponent implements OnInit {
  hello: string;
  @Input() message: string; // each element takes an input

  onMouseOver(event: MouseEvent) {
    console.log(event);
  }

  onClick(event: MouseEvent, value: string) {
    console.log(event);
    console.log(value);
  }

  constructor() {}

  ngOnInit() {
    // set the field when the component is initialized which then gets displayed
    this.hello = "hello world!";
  }
}
