import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
constructor(private router: Router) {}



  skipAd() {
    // alert('Ad skipped! Redirecting...');
    this.router.navigate(['/login/auth']);

  }
}
