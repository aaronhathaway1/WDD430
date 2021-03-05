import { EventEmitter, Injectable } from '@angular/core';

import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];

  contactSelectedEvent = new EventEmitter<Contact>();

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts
      .sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
      .slice();
  }

  getContact(id: string): Contact {
    return this.contacts.find((contact) => contact.id === id);
  }




  //   new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771','assets/images/jacksonk.jpg', null ),
  //   new Contact('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768','assets/images/barzeer.jpg', null ),
  //   new Contact('3', 'Shane Thompson', 'thompsonda@byui.edu', '208-496-3768','assets/images/thompsonda.jpg', null ),
  //   new Contact('4', 'Craig Lindstrom', 'thompsonda@byui.edu', '208-496-3768','assets/images/lindstromc.jpg', null ),
  //   new Contact('4', 'Tim Thayne', 'thayneti@byui.edu', '208-496-3777','assets/images/thayneti.jpg', null )
  // ];

}
