import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoProject';
  username = '';
  showPara = false;
  log = [];

onDisplay(){
  this.showPara = !this.showPara;
  // this.log.push( this.log.length + 1 );
  this.log.push( new Date() );
}
}