import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { CollectionItem } from '../model/collection-item.model';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css']
})

export class CollectionItemComponent implements OnInit {

  @Input() item: CollectionItem = {title: "", summary: ""}
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

}
