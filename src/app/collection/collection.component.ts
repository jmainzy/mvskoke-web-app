import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { CollectionItem } from '../model/collection-item.model';
import { Collection } from '../model/collection.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  items$: Array<CollectionItem> = [
    {title: "Hensci", summary: "Hello"},
    {title: "Estonko", summary: "How are you?"}
  ]

  constructor(private firestoreService: FirestoreService) { }

  @Input() collection: Collection = {title: "", items: []};
  ngOnInit(): void {
      this.getItems()
  }

  getItems() {
    this.collection.items.forEach(doc => {
      if (doc.path.includes("phrase")) {
        // phrase = this.firestoreService.getPhrase(doc)
        // TODO: Get phrases, terms
      }
      console.log(doc.path)
    });
  }
}
