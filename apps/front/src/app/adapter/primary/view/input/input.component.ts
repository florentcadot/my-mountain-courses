import {Component, EventEmitter, OnInit, Output} from '@angular/core'

@Component({
  selector: 'my-mountain-courses-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Output() inputEmitter = new EventEmitter<string | number>()

  handleInput(){
    this.inputEmitter.emit()
  }
}
