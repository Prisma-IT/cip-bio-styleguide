import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() passSnippets = new EventEmitter<any>();

  snippetHTML = `
  <div class="container-navigation" style="">
    <div class="menu-container" style="">
        <div class="logo" ><img src="./../../../assets/images/cip_logo.svg" alt="cip logo"></div>
            <ul class="menu">
                <li>Producten</li>
                <li>Workshop & games</li>
                <li>Uitgelicht</li>
                <li>Over CIP</li>
                <li>Bekijk ook</li>
                <li>Contact</li>
                <li>English Website</li>
            </ul>
        <div class="search">
            <div class="search-container">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text">
                <button><i class="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    </div>
</div>
`;
snippetCSS = `
body {
font: 100% Helvetica, sans-serif;
color: #333;
}

.box {
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
-ms-border-radius: 10px;
border-radius: 10px;
}
`;

  constructor(private elementRef: ElementRef) {

    document.addEventListener("click", function(e){
      let el = document.querySelector('.search-cont-small') as HTMLElement;
      if(el && el.className.includes('open')){
        let target = e.target as HTMLElement;
        console.log(target)
        if(!(target.id == 'icon-small-search' || target.id == 'input-small-search' || target.id == 'btn-small-search' || target.id == 'icon-small-search')){
          let el = document.querySelector('.search-cont-small') as HTMLElement;
          let input  = document.getElementById('input-small-search') as HTMLElement;
          el.animate({width:'16px'}, {duration:80,iterations:1});
          
          Promise.all(el.getAnimations().map((animation) => animation.finished)).then(
            () => {
              el.classList.add('close');
          el.classList.remove('open');
              el.style.width = '16px';
              input.focus();
            }
          );
        }
      }
    });

   }
  
  ngOnInit(): void {
    this.passSnippets.emit({html:this.snippetHTML,css:this.snippetCSS})
    let smallSearch = document.querySelector('.smallSearch')



  }
  public searchBar($event){
    console.log($event);
    let el = document.querySelector('.search-cont-small') as HTMLElement;
    // el.style.width = 'auto';
    let input  = document.getElementById('input-small-search') as HTMLElement;
    el.classList.remove('close');
    el.classList.add('open');
    el.animate({width:'229px'}, {duration:300,iterations:1});
    
    Promise.all(el.getAnimations().map((animation) => animation.finished)).then(
      () => {
        el.style.width = '229px';
        input.focus();
      }
    );
  }

  toggleMenu(){
    let menu = document.getElementById('hamburger-menu') as HTMLElement;
    menu.classList.toggle('open')
  }
  // public hideSearchBar(){
  //   let el = document.querySelector('.search-cont-small') as HTMLElement;
  //   let input  = document.getElementById('input-small-search') as HTMLElement;
  //   el.animate({width:'16px'}, {duration:100,iterations:1});
    
  //   Promise.all(el.getAnimations().map((animation) => animation.finished)).then(
  //     () => {
  //       el.classList.add('close');
  //   el.classList.remove('open');
  //       el.style.width = '16px';
  //       input.focus();
  //     }
  //   );
  // }
  
}
