import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class NoteService {
    path: string = '/notes';
    constructor(private apiService: ApiService) {

    }

    addNote(note) {
        return this.apiService.post(this.path, note);
    }

    getNotes() {
        return this.apiService.get(this.path);
    }

    removeNote(note) {
        return this.apiService.remove(`${this.path}/${note.id}`);
    }
}
