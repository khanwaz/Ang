import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { ServerComponent } from './MyComponents/server/server.component';
import { StopwatchComponent } from './MyComponents/stopwatch/stopwatch.component';
import { ServersComponent } from './MyComponents/servers/servers.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ServerComponent,
    StopwatchComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
