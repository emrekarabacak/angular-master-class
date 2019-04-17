import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  
  contact: Contact
  routeSubs: Subscription

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    this.contactsService
      .getContact(id).subscribe(data => this.contact = data);
  }
}
