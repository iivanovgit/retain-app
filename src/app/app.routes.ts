import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './containers/notes';
import { OtherComponent } from './containers/other';


const appRoutes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        children: [
            { path: '', component: NotesComponent },
            { path: 'other', component: OtherComponent },
        ]
    },
    { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes);
