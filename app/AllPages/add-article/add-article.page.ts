import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.page.html',
  styleUrls: ['./add-article.page.scss'],
})
export class AddArticlePage implements OnInit {


  articleArray = new Array();


  constructor(
    public alertController: AlertController,
    private router: Router,
    private shareData: ShareDataService
  ) { }

  ngOnInit() {
  }

  async openDialogeBox() {
    this.shareData.globalDialogBox("");
  }

  goPage2() {
    this.router.navigate(['/draft-article'])
  }

}
