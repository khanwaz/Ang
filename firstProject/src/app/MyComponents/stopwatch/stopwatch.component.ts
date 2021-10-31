import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.html'],
})
export class StopwatchComponent {
  startTime: any = null;
  endTime: any = null;
  running: any = 0;
  duration = 0;

  onStartTime() {
    if (this.running) 
        throw new Error('The stopwatch is already running');
    this.running = true;
    this.startTime = new Date();
  }
  onStopTime() {
    if (!this.running)
        throw new Error('The stopwatch is not running');
    this.running = false;
    this.endTime = new Date();
    const second = (this.endTime.getTime()- this.startTime.getTime()) / 1000;
    this.duration += second;
  }
  OnResetTime() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
  }
}
