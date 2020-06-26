import { Component, OnInit, Input } from '@angular/core';
import { IGnome } from 'src/app/shared/gnome.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() friendlyGnome;
  friends: number;
  constructor() {}

  ngOnInit(): void {
    this.friends = this.friendlyGnome.friends.length;
    console.log(this.friends);
  }
}
