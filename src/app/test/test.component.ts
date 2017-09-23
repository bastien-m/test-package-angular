import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-test',
  template: `
    <p>
      test Works!
    </p>
    {{yo}}
  `,
  styles: []
})
export class TestComponent implements OnInit {

  yo: string;

  constructor() { }

  ngOnInit() {
  }


  sayYo(): void {
    this.yo = 'Yo bro';
  }
  

}
