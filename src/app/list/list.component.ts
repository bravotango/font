import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Font } from '../font';
import { FontService } from '../font.service';
import { FONTS } from '../mock-fonts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  fonts : Font[];
  constructor(    
    private route: ActivatedRoute,
    private fontService: FontService) { }

  ngOnInit() {
    this.getList();
  }
  getList(): void {

    const string = +this.route.snapshot.paramMap.get('string');

    this.fontService.getList(string.toString().toUpperCase())
        .subscribe(fonts => this.fonts = fonts);
  }

}
