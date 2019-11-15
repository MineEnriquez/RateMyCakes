import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   newbaker: any= {bakername: "", imageurl : ""};
  rate: any = [{rating: "", comment : ""}];
  selectedbaker: any= {bakername: "", imageurl : "", arrayratings:[{rating: 0, comment : ""}]};
  displaycake: boolean=false;
  cakes: any = [];
  submitted: boolean;
  averagerating: any = 0;
  
  
  modifiedcakeid: any;
  selectedCake: any;  //TO TRANSFER TO THE NESTED COMPONENT.
  
  ngOnInit(){
    this.loadAllCakes();
  }
  constructor(private _httpService: HttpService){}
  
  onSubmit(){
    console.log("mine: NEW CAKE", this.newbaker);
    this.submitted=true;
    let observable = this._httpService.newCake(this.newbaker);
    observable.subscribe(data => {  
      console.log("New task created:", data);
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
      // since we need to be able to provide ratings for each cake, 
      // we create an ARRAY OF EMPTY RATING OBJECTS to later use them in the HTML;
      for (const key in data) {
        this.rate.push({rating: 0, comment : ""});
      }
      return this.cakes;
    })
    
  }
  rateMyCake(id: any, i: any){
    console.log(id);
    console.log(this.rate[i]);
    let newRatingObject: any = this.rate[i];
    this.modifiedcakeid = id;
    let observable = this._httpService.rateCake(id, newRatingObject);
    observable.subscribe(data => {  
      console.log("mine: CAKE UPDATED:");
      console.log(data);
      this.rate[i] = {rating: "", comment : ""};
      this.loadAllCakes();
      let newobs = this._httpService.getById(this.modifiedcakeid);
      newobs.subscribe(newdata => {
        let thiscake: any = newdata;
        this.showCake(thiscake.data);
      })
    })
  }
  showCake(data: any)  {
    // Computing Average Rating:
    let ave = 0 ;
    if(data.arrayratings.length > 0){
      for(let i in data.arrayratings) ave+= Number(data.arrayratings[i].rating);
      ave = ave / data.arrayratings.length;
      this.averagerating = ave.toFixed(1) + " stars";
    } else this.averagerating ="none";
    //Appending the value to the Object:
    data.averagerating = this.averagerating;       
  
    // assigning the final OBJECT to the **** BINDED **** object (binded to the Child component.)
    this.selectedCake = data;  //<====== this is the one that will be sent to the CHILD component.
  }
  
}
