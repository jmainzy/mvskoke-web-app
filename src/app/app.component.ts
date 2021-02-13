import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import { FirestoreService } from './firestore.service';

import {Term} from './model/term.model';

// Note: For search, probably use https://www.algolia.com/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  terms$!: Observable<Term[]>;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.terms$ = this.firestoreService.getTerms();
  }
}
