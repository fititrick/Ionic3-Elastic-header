
import { NavController } from 'ionic-angular';
import { ScrollHideConfig } from '../../directives/scroll-hide/scroll-hide';
import { Content } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

@ViewChild(Content) content: Content;
  
 headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 60 };
 fabConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: 70 };

  constructor(public navCtrl: NavController) {

  }


  scrollToTop() {
    this.content.scrollToTop(1000); 
  }
}
