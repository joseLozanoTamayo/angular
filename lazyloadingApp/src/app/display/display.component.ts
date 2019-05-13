import { Component, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() time = null;
  constructor() { }

  ngOnInit() {
  }

}
