import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { Route } from '@angular/router';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

export const APP_ROUTES: Route[] = [
    { path: 'contacts', component: ContactsListComponent },
    { path: 'contacts/:id/edit', component: ContactsEditorComponent},
    { path: 'contacts/:id', component: ContactsDetailComponent},
    { path: '**', redirectTo:'/contacts'},
]