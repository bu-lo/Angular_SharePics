import { Component, OnInit, Input } from '@angular/core';
import { PicShared } from '../models/pic-shared.model';

@Component({
  selector: 'app-pic-shared',
  templateUrl: './pic-shared.component.html',
  styleUrl: './pic-shared.component.scss'
})
export class PicSharedComponent implements OnInit {
@Input() picshared!: PicShared;

  buttonText!: string;

  ngOnInit() {
        this.buttonText ="What a pic!";
  }

  onWap(){
    if(this.buttonText === "What a pic!") {
      this.picshared.wap++;
      this.buttonText = "Oups, unwap..";
    } 
    else{
      this.picshared.wap--;
      this.buttonText = "What a pic!";
    }

  }
}
