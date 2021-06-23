import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from '../cat';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats: Cat[] = [];
  
  constructor(private catService: CatService) { }
  getCats() {
    this.catService.getCats().subscribe(
      cats => this.cats = cats    
    );    
  }

  ngOnInit(): void {
    this.getCats();
  }

  setPage(next:boolean) {
   this.catService.setPage(next);
   this.getCats();
  }

}
