import {Component, EventEmitter, OnInit, Output} from '@angular/core'

@Component({
  selector: 'mountain-routes-history-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Output() inputEmitter = new EventEmitter<string | number>()

  handleInput(){
    this.inputEmitter.emit()
  }
}
