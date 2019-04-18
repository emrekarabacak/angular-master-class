import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';

import { ContactsAppComponent } from './app.component';
import { ContactsService, API_TOKEN } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { RouterModule } from '@angular/router'
import { APP_ROUTES } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { FormsModule } from '@angular/forms';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';


@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService,
    { provide: API_TOKEN, useValue: 'http://localhost:4201/api' }
  ]
})
export class ContactsModule {

}
