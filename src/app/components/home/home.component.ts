import { Component, OnInit } from '@angular/core';
import { GnomesService } from 'src/app/shared/gnomes.service';
import { IGnome } from 'src/app/shared/gnome.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  gnomes: IGnome[];
  constructor(private gnomesService: GnomesService) {}

  ngOnInit() {
    this.getGnomes();
  }

  getGnomes(): void {
    this.gnomesService
      .getGnomes()
      .subscribe((gnomes) => (this.gnomes = gnomes));
    console.log(this.gnomes);
  }
}
