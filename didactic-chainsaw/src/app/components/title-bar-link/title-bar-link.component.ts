import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar-link',
  templateUrl: './title-bar-link.component.html',
  styleUrls: ['./title-bar-link.component.scss']
})
export class TitleBarLinkComponent implements OnInit {
  @Input("link") link: string = "";
  @Input("index") index: number = 0;
  @Input("text") text: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
