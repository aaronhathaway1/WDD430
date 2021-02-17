import { Component, OnInit } from '@angular/core';

import { Message } from '../message.model'

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message("1", "Lunch Meeting", "Dummy Text", 'Aaron Hathaway'),
    new Message("2", "Late Assignment", "Dummy Text", 'Aaron Hathaway'),
    new Message("3", "Religion Project", "Dummy Text", 'Aaron Hathaway')
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message){
    this.messages.push(message);
  }

}
