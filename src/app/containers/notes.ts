import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import { AfService } from '../services';

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
            *ngFor = "let note of items| async"
            [note]="note"
            (checked)="onNoteChecked($event)"
          >
          </note-card>
        </div>
      </div>
    </div>
    <div class="row center-xs" *ngFor = "let item of items | async">
    {{item.$key | json}}</div>
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
  neshto = [];
  items: FirebaseListObservable<any>;

  constructor(
    public af: AngularFire) {
    this.items = af.database.list('tasks');
    this.items.subscribe(value => {
      this.neshto = value;
      for (let i = 0; i < this.neshto.length; i++) {
        console.log(this.neshto[i]);
      }
      console.log('----------');
    });
  }

  onNoteChecked(key: string) {
    this.items.remove(key);
  }

  onCreateNote(note) {
    this.items.push(note);
  }

}
