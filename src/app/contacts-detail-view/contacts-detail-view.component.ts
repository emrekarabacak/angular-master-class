import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact$: Observable<Contact>

  constructor(private route: ActivatedRoute, private contactsService: ContactsService,private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact$ = this.contactsService.getContact(id);
  }

  navigateToEditor(id) {
    this.router.navigate(['contacts',id,'edit']);
  }

  navigateToList(){
    this.router.navigate(['/']);
  }
}
