import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items = [];

  ngOnInit() {
    for (let index = 0; index < 1000; index++) {
      this.items.push(index);
    }
  }

}
