import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caketoshow',
  templateUrl: './caketoshow.component.html',
  styleUrls: ['./caketoshow.component.css']
})
export class CaketoshowComponent implements OnInit {
  @Input() caketoshow: any;
  
  selectedbaker: any= {bakername: "", imageurl : "", arrayratings:[{rating: 0, comment : ""}]};
  averagerating: any = 0;


  constructor() { }

  ngOnInit() {
   }
  showCake(data: any){
    console.log(data)
    console.log("Display information about one cake");
    this.selectedbaker = data;
    let ave: number = 0;
    if(data.arrayratings.length > 0){
      for(let i in data.arrayratings){
        let r: string = data.arrayratings[i].rating;
        ave+= Number(r);
        console.log(ave);
      }
      ave = ave / data.arrayratings.length;
      console.log("------------final ave:", ave);
      this.averagerating = ave.toFixed(1) + " stars";
    }
    else{
      this.averagerating ="none";
    }
  }
}
