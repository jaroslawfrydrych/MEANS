import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersNewComponent} from './users-new/users-new.component';
import {UsersEditComponent} from './users-edit/users-edit.component';
import {UsersEditService} from './users-edit/users-edit.service';

const routes: Routes = [
    {
        path: '',
        component: UsersListComponent
    },
    {
        path: 'new',
        component: UsersNewComponent
    },
    {
        path: ':id',
        component: UsersEditComponent,
        resolve: {
            data: UsersEditService
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
