import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'

@Component({
  selector: 'mountain-routes-history-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnChanges{
  @Input()
  get item(): string { return this._item; }
  set item(name: string) {
    this._item = `yoo ${Math.random()}`;
  }
  _item = '';

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
