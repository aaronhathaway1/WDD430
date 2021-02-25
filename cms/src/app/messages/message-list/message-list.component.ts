import { Component, OnInit } from '@angular/core';

import { Message } from '../message.model'

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message("1", "Lunch Meeting", "Lunch meeting was cancelled", 'Aaron Hathaway'),
    new Message("2", "Late Assignment", "You suck at Mario Kart", 'Bobby Cunningham'),
    new Message("3", "Religion Project", "Y'all are lame", 'Geoff Rogers')
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message){
    this.messages.push(message);
  }

}
