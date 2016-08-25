import { Component, Output, EventEmitter } from '@angular/core';

// [ngModel]="newNote.value"
// (ngModelChange)="newNote.value = $event"
//
// equal to [(ngModel)]="newNote.value"


@Component({
    selector: 'note-creator',
    styles: [`
        .note-creator {
        padding: 20px;
        background-color: white;
        border-radius: 3px;
        }
        .title {
        font-weight: bold;
        color: rgba(0,0,0,0.8);
        }
        .full {
        height: 100px;
        }
    `],
    template: `
    <div class="note-creator shadow-2"
    (clickOutside)="toggle(false)" 
    [ngStyle]="{'background-color': newNote.color}">
        <form class="row" (submit)="onCreateNote()">
            <input class="col-xs-10 title"
            type="text"
            [(ngModel)]="newNote.title"
            name="newNoteTitle"
            placeholder="Title"
            *ngIf="fullForm"
            >
            <input
            type="text"
            (focus)="toggle(true)"
            [(ngModel)]="newNote.value"
            name="newNoteValue"
            placeholder="Take a note..."
            class="col-xs-10"
            >
            <div class="actions col-xs-12 row between-xs" 
            *ngIf="fullForm" 
            (click)="close()">
                <div class="col-xs-3">
                    <color-picker
                        [colors]="colors"
                        (selected)="onColorSelect($event)"></color-picker>
                </div>  
                <button type="submit" class="btn-light">
                    Done
                </button>
            </div>
        </form>
    </div>
    `
})
export class NoteCreatorComponent {
    @Output() createNote = new EventEmitter();

    colors: Array<string> = [
        'gold', 'lightblue', 'crimson', 'lightgreen', 'pink', 'white'
    ];
    newNote = {
        title: '',
        value: '',
        color: 'white'
    };
    fullForm: boolean = false;

    onCreateNote() {
        const { title, value, color } = this.newNote;

        if (title && value) {
            this.createNote.next({ title, value, color });
            this.reset();
            this.toggle(false);
        }
    }

    onColorSelect(color: string) {
        this.newNote.color = color;
    }

    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
    }

    toggle(value: boolean) {
        this.fullForm = value;
    }

    close() {

    }
}
