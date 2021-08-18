import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ShareDataService } from 'src/app/services/share-data.service';
import { MyModalPage } from '../my-modal/my-modal.page';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.page.html',
  styleUrls: ['./add-article.page.scss'],
})
export class AddArticlePage implements OnInit {


  articleArray = new Array();
  dataReturned: any;
  count: any = 1;

  constructor(
    public alertController: AlertController,
    private router: Router,
    private shareData: ShareDataService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async openDialogeBox() {
    this.shareData.globalDialogBox("");
  }

  goPage2() {
    this.router.navigate(['/draft-article'])
  }

  async openModal() {

    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
