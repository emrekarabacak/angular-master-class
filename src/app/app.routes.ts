import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { Route } from '@angular/router';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';

export const APP_ROUTES: Route[] = [
    { path: 'contacts', component: ContactsListComponent },
    { path: 'contacts/:id/edit', component: ContactsEditorComponent},
    { path: 'contacts/:id', component: ContactsDetailViewComponent},
    { path: '**', redirectTo:'/contacts'},
]