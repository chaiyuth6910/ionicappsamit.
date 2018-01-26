import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // ฟังก์ชันเปิดหน้าใหม่จากการคลิ๊กปุ่มอ่านต่อ
  showdetail()
  {
    this.navCtrl.push(DetailPage);
  }

}
