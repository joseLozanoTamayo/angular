import { Component, OnInit } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'lazyloadingApp';

  info:boolean = true;

  lista = [
    {name: "Elemento 1"},
    {name: "Elemento 2"},
    {name: "Elemento 3"}
  ];

  tab: number = 23;

  constructor(private json: JsonService){}

  ngOnInit(): void {

    console.log(' response getdata : ' + JSON.stringify(this.json.getData('https://api.github.com/users/ibuioli/repos')));

    this.json.getData('https://api.github.com/users/ibuioli/repos').subscribe(
      val => {
        console.log(val);
      });
  }

  logCompleted(): void {
    console.log('it has completed');
  }

}
