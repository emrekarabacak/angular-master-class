import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact = <Contact>{ address: {} };

  constructor(private contactService: ContactsService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    let id = this.router.snapshot.params['id'];
    this.contactService.getContact(id).subscribe(data => this.contact = data);
  }

  cancel(contact: Contact) {
    this.route.navigate(['contacts', this.contact.id]);
  }

  save(contact: Contact) {
    this.contactService.updateContact(contact).subscribe(_ => this.route.navigate(['contacts', this.contact.id]));
  }
}
