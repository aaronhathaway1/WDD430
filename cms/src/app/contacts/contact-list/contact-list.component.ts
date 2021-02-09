import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [
    new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771','assets/images/jacksonk.jpg', null ),
    new Contact('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768','assets/images/barzeer.jpg', null ),
    new Contact('3', 'Shane Thompson', 'thompsonda@byui.edu', '208-496-3768','assets/images/thompsonda.jpg', null ),
    new Contact('4', 'Craig Lindstrom', 'thompsonda@byui.edu', '208-496-3768','assets/images/lindstromc.jpg', null ),
    new Contact('4', 'Tim Thayne', 'thayneti@byui.edu', '208-496-3777','assets/images/thayneti.jpg', null )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

