import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // Here it should be public
  // Angular - need to use public if we use binding
  constructor(public messageService:MessageService) { }

  ngOnInit() {
  }

  clearMessages() :void{
    this.messageService.clear();
  }

}
