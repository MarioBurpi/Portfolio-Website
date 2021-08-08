import { AfterViewInit, Component } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-about-scr',
  templateUrl: './about-scr.component.html',
  styleUrls: ['./about-scr.component.css'],
})

export class AboutScrComponent implements AfterViewInit {


  constructor() { }

  ngAfterViewInit(): void {
    const textWrapper: any = document.querySelector(".lead");
    try {
      textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>");
      anime.timeline({loop: true}).add({
        targets: '.lead .letter',
        scale: [2,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 50,
        delay: (el: any, i: number) => 30*i
      }).add({
        targets: '.lead',
        opacity: 0,
        duration: 30,
        easing: "easeOutExpo",
        delay: 100000
      });
    } catch (error) {
      console.log(error)
    }


  }



}
