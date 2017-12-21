import { Component, OnInit } from '@angular/core';
import { Font } from '../font';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FontService } from '../font.service';

@Component({
  selector: 'app-font-download',
  templateUrl: './font-download.component.html',
  styleUrls: ['./font-download.component.css']
})

export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fontService: FontService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFont();
  }

  getFont(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fontService.getFont(id)
      .subscribe(font => this.font = font);
  }
  
  goBack(): void {
    this.location.back();
  }
  
  @Input() font: Font;
}
