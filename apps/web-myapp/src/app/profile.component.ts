import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'abc-profile',
  template: `
  <div><a (click)="back()" [routerLink]="">Back</a></div>
  <div> Text: {{url}} </div>
  `
})
export class ProfileComponent {
  public url: string;

  constructor(private _router: Router, private _loc: Location) {}

  ngOnInit() {
    this.url = this._router.url;
  }

  back() {
    this._loc.back();
  }
}
