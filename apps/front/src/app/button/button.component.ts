import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'mountain-routes-history-button',
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
