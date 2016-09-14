import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Note, AfService } from '../services';

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
            *ngFor = "let note of notes"
            [note]="note"
            (checked)="onNoteChecked($event)"
          >
          </note-card>
        </div>
      </div>
    </div>
    <div class="row center-xs" *ngFor = "let note of notes">
    {{note.$key | json}}</div>
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

export class NotesComponent implements OnInit {
  notes: Note[];
  sub: Subscription;

  // items: FirebaseListObservable<any>;

  // constructor(
  //   public af: AngularFire) {
  //   this.items = af.database.list('tasks');
  //   this.items.subscribe(value => {
  //     this.neshto = value;
  //     for (let i = 0; i < this.neshto.length; i++) {
  //       console.log(this.neshto[i]);
  //     }
  //     console.log('----------');
  //   });
  // }

  constructor(
    private service: AfService,
  ) { }

  ngOnInit() {
    this.sub = this.service.getNotes()
      .subscribe(res => {
        this.notes = res;
        for (let i = 0; i < this.notes.length; i++) {
          console.log(this.notes[i]);
        }
        console.log('----------');
      });
  }

  onNoteChecked(key: string) {
    this.service.addNote(key);
  }

  onCreateNote(note) {
    this.service.removeNote(note);
  }

}
