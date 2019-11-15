import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService} from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCakeComponent } from './components/new-cake/new-cake.component';
import { FormsModule } from "@angular/forms";
import { CaketoshowComponent } from './components/caketoshow/caketoshow.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCakeComponent,
    CaketoshowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
