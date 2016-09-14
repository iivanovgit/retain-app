import { Component } from '@angular/core';
@Component({
    selector: 'other-comp',
    template: `
    <h2>This is componentName component.</h2>
    <h3>Name: {{ name }}</h3>`
})


export class OtherComponent {
    name: string = 'Angular2 User';
}
