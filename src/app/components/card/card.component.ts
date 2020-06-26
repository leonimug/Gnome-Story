import { Component, OnInit, Input } from '@angular/core';
import { IGnome } from 'src/app/shared/gnome.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() gnome;
  constructor() {}

  ngOnInit(): void {}
}
