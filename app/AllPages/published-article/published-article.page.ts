import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ShareDataService } from 'src/app/services/share-data.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-published-article',
  templateUrl: './published-article.page.html',
  styleUrls: ['./published-article.page.scss'],
})
export class PublishedArticlePage implements OnInit {


  publishedArticle: any = [];
  backupUpUsers: any = [];
  constructor(
    public alertController: AlertController,
    private shareData: ShareDataService,
    private storage: Storage,
    private router: Router

  ) {
    this.callAllStorage();
  }

  async ngOnInit() {
    await this.storage.create();

  }

  callAllStorage() {
    this.storage.get("article").then((data: any) => {
      this.publishedArticle = data;
      this.backupUpUsers = this.publishedArticle;
      console.log("published article =", this.publishedArticle)
    })
  }


  searchArticle(event: any) {
    const filteration = event.target.value;
    this.publishedArticle = this.filterItems(filteration);
    if (filteration.length === 0) {
      this.publishedArticle = this.backupUpUsers;
      console.log("published article =", this.publishedArticle)
    }

  }
  filterItems(searchTitle: any) {
    return this.publishedArticle.filter(item => {
      return item.title.toLowerCase().indexOf(searchTitle.toLowerCase()) > -1;
    });
  }

}
