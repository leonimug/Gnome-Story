import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GnomesService } from 'src/app/shared/gnomes.service';
import { IGnome } from 'src/app/shared/gnome.model';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.css'],
})
export class GnomeDetailComponent implements OnInit {
  gnome: IGnome;
  constructor(
    private gnomesService: GnomesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGnome();
  }

  getGnome(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gnomesService.getGnome(id).subscribe((gnome) => (this.gnome = gnome));
  }

  goBack(): void {
    this.location.back();
  }
}
