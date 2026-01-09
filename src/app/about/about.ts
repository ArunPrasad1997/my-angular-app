import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  title = 'About Page';
  description = 'About this application';

  name = '';

  features = [
    'Angular',
    'TypeScript',
    'Routing',
    'Components'
  ];

  showDetails = false;


  changeTitle() {
    this.title = 'About page updated';
  }

  toggleDetails() {
    this.showDetails = !this.showDetails
  }
}
