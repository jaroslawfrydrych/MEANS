import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-testlib',
  template: `
    <p>
      testlib works!
    </p>
  `,
  styles: []
})
export class TestlibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
