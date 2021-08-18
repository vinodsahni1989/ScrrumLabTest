import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor(
    public alertController: AlertController,
  ) { }



  async globalDialogBox(InputValue:any) {
    const alert = await this.alertController.create({
      header: 'Article dialog box',
      cssClass: 'input-alert',
      backdropDismiss: false,
      inputs: [
        {
          value:InputValue,
          type: 'textarea',
          placeholder: 'Enter  Article'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: (data: any) => {
            console.log(data)
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }


}
