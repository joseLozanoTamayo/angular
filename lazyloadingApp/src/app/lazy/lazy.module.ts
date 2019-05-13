import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { TimerComponentComponent } from '../timer-component/timer-component.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { DisplayComponent } from '../display/display.component';

@NgModule({
  declarations: [EmployeeComponent, TimerComponentComponent, DisplayComponent],
  imports: [
    CommonModule, LazyRoutingModule
  ]
})
export class LazyModule { }
