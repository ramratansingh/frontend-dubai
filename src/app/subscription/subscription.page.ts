import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home']); 
  }
}
