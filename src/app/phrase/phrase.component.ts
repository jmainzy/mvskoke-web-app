import { Component, Input, OnInit } from '@angular/core';
import { Phrase } from '../model/phrase.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.css']
})
export class PhraseComponent implements OnInit {

  @Input() phrase: Phrase = {id: "", phraseSource: "", phraseTarget: "", audio: []};
  constructor(private storage: AngularFireStorage) {
   }

  ngOnInit(): void {
  }

  onClickPlay(audioRef: string) {
    console.log("play")
    const ref = this.storage.ref('audio/'+audioRef);
    ref.getDownloadURL().subscribe( url => {
      console.log("url: "+url);
    })
  }

}
