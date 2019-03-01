import { Component } from '@angular/core';

import { BaseComponent } from '@mycompany/core';

@Component({
  selector: 'abc-sample',
  templateUrl: 'sample.component.html'
})
export class SampleComponent extends BaseComponent {
  constructor() {
    super();
  }
}
