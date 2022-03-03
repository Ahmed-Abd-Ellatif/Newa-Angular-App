import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-topheadding',
  templateUrl: './topheadding.component.html',
  styleUrls: ['./topheadding.component.scss']
})
export class TopheaddingComponent implements OnInit {

  constructor(private newApi:NewsapiService) { }
  topHeadingDisplay:any=[];
  ngOnInit(): void {
    this.newApi.topHeading().subscribe((res)=>{
      console.log(res)
      this.topHeadingDisplay = res.articles
    })
  }

}
