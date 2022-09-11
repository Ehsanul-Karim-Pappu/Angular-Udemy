import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Udemy';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  userName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server is created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event)
    // console.log(event.target.value)
    this.serverName = event.target.value;
  }

}
