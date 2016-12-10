import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component( {
    selector: 'hello-world-1',
    templateUrl: './hello-world.component.html',
    // styles: [`h1 {color:green}`],
    styleUrls: ['./hello-world.component.css'],
    encapsulation: ViewEncapsulation.None
    // template: `
    //     <label>Name:</label>
    //     <input type="text">
    //     <hr>
    //     Hello,  {{myName}}
    // `

})

export class HellowWorld1Component {
    @Input('name')
    myName: string;

    @Output()
    onClickMe = new EventEmitter<boolean>();

    clickMe(str) {
        //alert('Hello, ' + str);
        this.onClickMe.emit(true);
    }
}