import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'my-mountain-courses-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {

  @Input()
  label = ''

  @Output() clicked = new EventEmitter<string>();


  handleClick(){
    this.clicked.emit('click')
  }
}
