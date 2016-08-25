import { Component } from '@angular/core';

@Component({
  selector: 'notes-container',
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card class="col-xs-4"
            *ngFor = "let note of notes; let i = index"
            [note]="note"
            (checked)="onNoteChecked($event, i)"
          >
          </note-card>
        </div>
      </div>
    </div>
    `,
  styles: [`
        .notes {
        padding-top: 50px;
        }
        .creator {
        margin-bottom: 40px; 
        }
    `]
})

export class NotesComponent {
  notes = [
    {
      title: 'clean up',
      value: 'clean room',
      color: 'gold'
    }, {
      title: 'clean up',
      value: 'Do not forget to clean up',
      color: 'lightgreen'
    },
    {
      title: 'clean up',
      value: 'clean room',
      color: 'pink'
    }
  ];

  onNoteChecked(note, index) {
    this.notes.splice(index, 1);
  }

  onCreateNote(note) {
    this.notes.push(note);
  }

}
