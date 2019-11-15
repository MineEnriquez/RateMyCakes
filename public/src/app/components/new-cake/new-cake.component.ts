import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from "../../services/http.service";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-new-cake',
  templateUrl: './new-cake.component.html',
  styleUrls: ['./new-cake.component.css']
})
export class NewCakeComponent implements OnInit {
  newbaker: any= {bakername: "", imageurl : ""};
  rate: any = [{rating: "", comment : ""}];
  selectedbaker: any= {bakername: "", imageurl : "", arrayratings:[{rating: 0, comment : ""}]};
  displaycake: boolean=false;
  cakes: any = [];
  submitted: boolean;
  averagerating: any = 0;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.loadAllCakes();
  }

  onSubmit(){
    console.log("mine: NEW CAKE")
    console.log(this.newbaker);
    this.submitted=true;
    let observable = this._httpService.newCake(this.newbaker);
    observable.subscribe(data => {  
      console.log("New task created:");
      console.log(data);
      
      this.newbaker = {bakername: "Enter a valid name", imageurl : "Enter a valid url"};
      this.submitted = true;
      this.loadAllCakes();
    })
  }
  loadAllCakes(){
    console.log("mine: LOAD ALL CAKES INFORMATION");
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {  
      console.log("mine: ALL CAKES LOADED");
      console.log(data);
      this.cakes = data;
      //since we need to be able to provide ratings for each cake, we construct an array of empty ratings objects to later use them in the HTML;
      for (const key in data) {
        this.rate.push({rating: 0, comment : ""});
      }
    })
  }
  rateMyCake(id: any, i: any){
    console.log(id);
    console.log(this.rate[i]);
    let newrating: any = this.rate[i];

    let observable = this._httpService.rateCake(id, newrating);
    observable.subscribe(data => {  
      console.log("mine: CAKE UPDATED:");
      console.log(data);
      this.rate[i] = {rating: "", comment : ""};
      this.loadAllCakes();
    })
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
    
    this.displaycake = true;
  }

}
