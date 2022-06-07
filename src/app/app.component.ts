import { Component } from '@angular/core';
import { faYoutube,faFacebook,faLinkedin,faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
export class AppComponent {
  title = 'trial-app';
  faYoutube = faYoutube
  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faWhatsapp = faWhatsapp
  faBars = faBars
}
