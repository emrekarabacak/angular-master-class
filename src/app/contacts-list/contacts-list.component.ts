import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts$: Observable<Contact[]>

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contacts$ = this.contactService.getContacts();
  }

  trackByContactId(index, contact) {
    return contact.id;
  }

}
