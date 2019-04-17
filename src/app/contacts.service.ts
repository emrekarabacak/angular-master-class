import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Contact, ContactResponse } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactsResponse } from './models/contact';

export const API_TOKEN = new InjectionToken('API_TOKEN');

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient, @Inject(API_TOKEN) private API_ENDPOINT) { }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.API_ENDPOINT}/contacts`).pipe(
      map(data => data.items)
    );
  }

  getContact(id: string | number): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.API_ENDPOINT}/contacts/${id}`).pipe(
      map(data => data.item)
    );
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put<Observable<any>>(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact);
  }
}
