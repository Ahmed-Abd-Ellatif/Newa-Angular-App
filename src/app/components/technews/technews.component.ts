import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {
techNews:any=[];
  constructor(private newsApi:NewsapiService) { }

  ngOnInit(): void {
    this.newsApi.techNews().subscribe((res)=>{
      console.log(res)
      this.techNews=res.articles;
    })
  }

}
