import { Component } from '@angular/core';

@Component({
  selector: 'main-container',
  template: `
    <div>
        <main class="main">
           <ng-content></ng-content>
        </main>
    </div>
  `
})
export class MainComponent {
  
}
