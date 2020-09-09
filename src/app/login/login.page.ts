import { Component, OnInit, Input } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs'

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
      subtitle: 'Unlock the app using Bio Security', // (Android Only) | 
      description: 'Bio Authentication', // optional | 
      fallbackButtonTitle: 'Use Backup', // optional | 
    }).then(() => {
      if(this.isModal){
        timer(1000).subscribe(() => this.modalCtrl.dismiss());
      } else{
        timer(1000).subscribe(() => this.router.navigateByUrl('/home'));
      }
    })
    .catch((error: any) => {
      console.log('err: ', error);
    });
  }//end login function

}
