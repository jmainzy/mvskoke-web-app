import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from '../model/collection.model';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.css']
})
export class CollectionsListComponent implements OnInit {

  collections$!: Observable<Collection[]>;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.collections$ = this.firestoreService.getCollections();
  }

}
