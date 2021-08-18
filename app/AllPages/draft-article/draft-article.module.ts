import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftArticlePageRoutingModule } from './draft-article-routing.module';

import { DraftArticlePage } from './draft-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftArticlePageRoutingModule
  ],
  declarations: [DraftArticlePage]
})
export class DraftArticlePageModule {}
