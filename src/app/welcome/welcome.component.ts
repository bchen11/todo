import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  name='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  console.log(this.message);
   this. name = this.route.snapshot.params['name'];
  }

}
