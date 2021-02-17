import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore.service';
import { Term } from '../model/term.model';

@Component({
  selector: 'app-terms-list',
  templateUrl: './terms-list.component.html',
  styleUrls: ['./terms-list.component.css']
})

export class TermsListComponent implements OnInit {
  terms$!: Observable<Term[]>;
  expandedId = "-1";

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.terms$ = this.firestoreService.getTerms();
  }

  handlePanelClose(termId: string) {
    if (this.expandedId == termId) {
      this.expandedId = '-1'
    }
  }
}

