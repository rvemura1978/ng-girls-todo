import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submitEvent: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';

  constructor() {
  }

  ngOnInit() {
  }


  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  submitValue(newTitle: string) {
this.submitEvent.emit(newTitle);
  }

}
