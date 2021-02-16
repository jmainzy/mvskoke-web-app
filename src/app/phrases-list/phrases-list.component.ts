import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore.service';
import { Phrase } from '../model/phrase.model';
import { Term } from '../model/term.model';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.css']
})
export class PhrasesListComponent implements OnInit {

  phrases$!: Observable<Phrase[]>;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.phrases$ = this.firestoreService.getPhrases();
  }

}
