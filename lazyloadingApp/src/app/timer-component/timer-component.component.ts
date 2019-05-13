import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css'],
  providers: [TimerService]
})
export class TimerComponentComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComplete = new EventEmitter<void>();
  @Input() init = 20;
  private countdownEndRef: Subscription = null;

  constructor(public timer: TimerService) { }

  ngOnInit() {
    this.timer.restartCountdown(this.init);
    this.countdownEndRef = this.timer.countdownEnd$.subscribe(() => {
      this.onComplete.emit();
    });
  }

  ngOnDestroy(){
    this.timer.destroy();
    this.countdownEndRef.unsubscribe();
  }
}
