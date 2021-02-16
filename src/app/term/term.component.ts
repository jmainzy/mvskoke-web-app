import { Component, Input, OnInit } from '@angular/core';
import { Term } from '../model/term.model';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {

  @Input() term: Term = new Term("","", []);
  constructor() { }

  ngOnInit(): void {
  }

}
