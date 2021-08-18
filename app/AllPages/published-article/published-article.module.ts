import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublishedArticlePageRoutingModule } from './published-article-routing.module';

import { PublishedArticlePage } from './published-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublishedArticlePageRoutingModule
  ],
  declarations: [PublishedArticlePage]
})
export class PublishedArticlePageModule {}
