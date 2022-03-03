import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.scss']
})
export class BusinessnewsComponent implements OnInit {
  businessNewsDisplay:any=[];
  constructor(private newsApi:NewsapiService) { }

  ngOnInit(): void {
    this.newsApi.businessNews().subscribe((res)=>{
      this.businessNewsDisplay = res.articles
    })
  }

}
