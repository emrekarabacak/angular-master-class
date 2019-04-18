import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  
  @Input()contact: Contact
  @Output() back = new EventEmitter();
  @Output() edit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  backToList(){
    this.back.emit();
  }

  navigateToEdit(id){
    this.edit.emit(id);
  }
}
