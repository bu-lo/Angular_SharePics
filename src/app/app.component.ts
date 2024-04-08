import { Component, OnInit } from '@angular/core';
import { PicShared } from './models/pic-shared.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  myWap!: PicShared;
  myOtherWap!: PicShared;
  myOtherOtherWap!: PicShared;
  myLastWap!: PicShared;

  ngOnInit() {
    this.myWap = new PicShared(
      'Chloé BOIVIN 📸',
      'Candidate motivée, à la recherche d une alternance dans le dév !',
      new Date(),
      0,
      'https://bu-lo.github.io/portfolio/images/Photo%20licence.jpg'
    );

    this.myOtherWap = new PicShared(
      'Template et créativité ✨',
      'Génération par IA de cette image ! Passionnée par l apprentissage de nouvelles connaissances, je fais preuve d une grande adaptabilité !',
      new Date(),
      7,
      'https://bu-lo.github.io/portfolio/images/Picture2.png'
    );

    this.myOtherOtherWap = new PicShared(
      'La Formation 💻',
      'Organisme de formation pour mon alternance ! 9 semaines intensives avant l arrivée en entreprise, puis 1 vendredi sur 2 pendant 13 mois.',
      new Date(),
      5,
      'https://bu-lo.github.io/portfolio/images/WAGON.PNG'
    );

    this.myLastWap = new PicShared(
      'Pourquoi pas vous ? 😉',
      'Let s work together ! 13 mois (presque) à temps plein à partir de septembre 2024.',
      new Date(),
      99,
      'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/d8/d7/93/d8d79334-317b-caea-5155-20b13d3c6f08/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/1200x600wa.png'
    )

  }
}
