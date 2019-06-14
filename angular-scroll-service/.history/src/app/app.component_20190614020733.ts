import { Component } from '@angular/core';
import { WindowScrollService } from './window-scroll.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  scroll:number = 0;

  constructor(private scrollService:WindowScrollService){
    this.scrollService.scroll$.subscribe(pos => {
      this.scroll = pos;
    })
  }
}
