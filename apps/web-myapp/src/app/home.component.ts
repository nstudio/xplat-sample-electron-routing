import { Component } from '@angular/core';

@Component({
  selector: 'abc-home',
  template: `
  <div class="p-x-20">
    <div style="text-align:center">
      <h2>
        Welcome to an Angular CLI app built with Nrwl Nx and xplat!
      </h2>
      <img width="100" src="assets/nx-logo.png">
      <span style="position: relative;top: -28px;margin: 10px;">+</span>
      <img width="120" src="assets/xplat.png">
    </div>
  
    <h2>Nx</h2>
  
    An open source toolkit for enterprise Angular applications. Nx is designed to help you create and build enterprise grade
    Angular applications. It provides an opinionated approach to application project structure and patterns.
  
    <h3>Quick Start & Documentation</h3>
  
    <a href="https://nrwl.io/nx">Watch a 5-minute video on how to get started with Nx.</a>
  
    <h1>{{'hello' | translate}}</h1>
    <h3>Try things out</h3>

    <a routerLink="/profile/1">Test</a>
  </div>
  `
})
export class HomeComponent {}
