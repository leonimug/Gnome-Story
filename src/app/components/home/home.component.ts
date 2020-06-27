import { Component, OnInit } from '@angular/core';
import { GnomesService } from 'src/app/shared/gnomes.service';
import { IGnome } from 'src/app/shared/gnome.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  friendlyGnomes: IGnome[];
  gnomeID: number;
  constructor(public gnomesService: GnomesService) {}

  ngOnInit() {
    this.getFriendlyGnomes();
  }

  getFriendlyGnomes() {
    this.gnomesService.getGnomes().subscribe(
      (data: IGnome[]) =>
        (this.friendlyGnomes = data
          .filter((gnomes) => gnomes.friends.length > 3)
          .slice(0, 12)),
      (err: any) => console.log(err),
      () => console.log('All done')
    );
  }
}
