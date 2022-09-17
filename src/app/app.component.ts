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
  servers = ['Testserver 1', 'Testserver 2'];
  isClickedDisplayButton = false;
  log : any = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server is created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event)
    // console.log(event.target.value)
    this.serverName = event.target.value;
  }

  onDisplayBtnClick() {
    this.isClickedDisplayButton = !this.isClickedDisplayButton;
    this.log.push(new Date());
  }

  // section 5
  serverElements: {type: string, name: string, content: string}[] = [{
    type: 'server',
    name: 'Testserver',
    content: 'Just a test'
  }];
  onServerAdded($event: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: $event.serverName,
      content: $event.serverContent
    });
  }

  onBlueprintAdded($event: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: $event.serverName,
      content: $event.serverContent
    });
  }
}
