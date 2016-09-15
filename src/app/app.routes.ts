import { Routes, RouterModule } from '@angular/router';
import { NotesComponent, OtherComponent, MainComponent, AuthComponent } from './containers';
import { AuthService } from './services';



const appRoutes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: MainComponent,
        // canActivate: [AuthService],
        children: [
            { path: '', component: NotesComponent },
            { path: 'other', component: OtherComponent },
        ]
    },
    // { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes);
