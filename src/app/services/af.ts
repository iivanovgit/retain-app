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


    private notes$: FirebaseListObservable<Note[]>;

    constructor(af: AngularFire) {
        const path = '/tasks';
        this.notes$ = af.database.list(path);
    }

    public getNotes() {
        return this.notes$;
    }

    public addNote(key: string) {
        this.notes$.remove(key);
    }

    public removeNote(note: Note) {
        this.notes$.push(note);
    }


    // filterTasks(filter: string): void {
    //     switch (filter) {

    //         default:
    //             this.filter$.next(null);
    //             break;
    //     }
    // }
}
