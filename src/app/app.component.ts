import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

// Note: For search, probably use https://www.algolia.com/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1; 
  
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Words',
            link: './words',
            index: 0
        }, {
            label: 'Phrases',
            link: './phrases',
            index: 1
        }, {
            label: 'Collections',
            link: './collections',
            index: 2
        }, 
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
