import { Component } from '@angular/core';

@Component({
  //it works fine without moduleId
  moduleId: module.id,
  selector: 'about',
  template: `
    <h1>About this Application</h1>
    <a routerLink="/home">About</a>
  `,
})
export class AboutComponent {

  }
