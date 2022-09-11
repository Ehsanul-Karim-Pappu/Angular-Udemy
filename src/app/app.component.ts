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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is created!';
  }

  onUpdateServerName(event: any) {
    console.log(event)
    console.log(event.target.value)
    this.serverName = event.target.value;
  }

}
