import { Component, OnInit } from '@angular/core';
import { GnomesService } from 'src/app/shared/gnomes.service';
import { IGnome } from 'src/app/shared/gnome.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  gnomes: any[] = [];
  constructor(private gnomesService: GnomesService) {}

  ngOnInit() {
    this.gnomesService.getGnomes().subscribe((data: any) => {
      for (let i = 0; i < data.Brastlewark.length; i++) {
        this.gnomes.push(data.Brastlewark[i]);
      }

      console.log(this.gnomes);
    });
  }
}
