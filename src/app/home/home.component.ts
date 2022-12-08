import { HtmlParser } from '@angular/compiler';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked{
  snippetHTML:string;
  snippetCSS:string;
  snippetHTMLBanner:string;
  snippetCSSBanner:string;
  menu='navigation'
  snippet = 'html';
  constructor(private highlightService: HighlightService) { }
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  ngOnInit(): void {
  }
  changeSnippet(type){
    this.snippet = type;
  }

  changeMenu(menu){
    this.menu = menu;
  }
  passSnippets($event){
    console.log($event)
    if($event.html != null){
      this.snippetHTML= $event.html;
    }
    if($event.css != null){
      this.snippetCSS= $event.css;
    }
  }
}
