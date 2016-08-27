import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export interface Note {
    $key?: string;
    title: string;
    value: string;
    color: string;
}


@Injectable()
export class AfService implements Note {
    title: string;
    value: string;
    color: string;


    private tasks$: FirebaseListObservable<Note[]>;

    constructor(af: AngularFire) {
        const path = '/tasks';
        this.tasks$ = af.database.list(path);
    }



    // filterTasks(filter: string): void {
    //     switch (filter) {

    //         default:
    //             this.filter$.next(null);
    //             break;
    //     }
    // }
}
