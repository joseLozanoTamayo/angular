import { Component } from '@angular/core';
import { WindowScrollService } from './window-scroll.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  scroll:number = 0;

  numbers = [1, 2, 3, 4, 5];

  constructor(private scrollService:WindowScrollService){

    this.numbers = [1, 2, 3, 4, 5];

    this.scrollService.scroll$.subscribe(pos => {
      this.scroll = pos;
    })
  }
}
