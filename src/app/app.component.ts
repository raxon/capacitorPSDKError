import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
declare var PESDK;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    PESDK.openEditor(
      console.log,
      console.log,
      PESDK.loadResource('www/assets/anything.jpg')
    );
  }

}
