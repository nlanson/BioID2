import { Component, OnInit, Input } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input()isModal: boolean; //read isModal from home component

  constructor(
    private faio: FingerprintAIO,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log("i am modal", this.isModal);
  }
  
  login(){
    this.faio.show({
      title: 'Biometric Authentication', // (Android Only) | optional |
      subtitle: 'Coolest Plugin ever', // (Android Only) | 
      description: 'Please authenticate', // optional | 
      fallbackButtonTitle: 'Use Backup', // optional | 
    }).then(() => {
      if(this.isModal){
        this.modalCtrl.dismiss();
      } else{
        this.router.navigateByUrl('/home');
      }
    })
    .catch((error: any) => {
      console.log('err: ', error);
    });
  }//end login function

}
