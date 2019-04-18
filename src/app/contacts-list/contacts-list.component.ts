import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts$: Observable<Contact[]>
  term$: Subject<string> = new Subject();

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    const initial$ = this.contactService.getContacts();
    const search$ = this.term$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.contactService.search(term))
    );

    this.contacts$ = merge(initial$, search$);
  }

  trackByContactId(index, contact) {
    return contact.id;
  }

}
