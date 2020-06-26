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
  constructor(public gnomesService: GnomesService) {}

  ngOnInit() {
    this.getGnomes();
  }

  getGnomes() {
    this.gnomesService.getGnomes().subscribe(
      (data: IGnome[]) => (this.gnomes = data.slice(0, 4)),
      (err: any) => console.log(err),
      () => console.log('All done')
    );
  }
}
