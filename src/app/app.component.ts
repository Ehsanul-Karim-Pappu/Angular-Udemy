import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Udemy';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  userName = '';
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2'];
  isClickedDisplayButton = false;
  log : any = [];


  constructor(private accountsService: AccountsService) {
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


  // section 5 Assignment
  numArray: number[] = [];
  onEventFired($event: number) {
    this.numArray.push($event);
  }


  // section 7
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  value = 10;

  // section 9
  accounts: {name: string, status: string} [] = [];

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  // section 9 assignment (services and dependency injection)

}
