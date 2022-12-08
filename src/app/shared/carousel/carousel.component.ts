import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Output() passSnippets = new EventEmitter<any>();
  @ViewChild('carousel', {static: true}) carousel;
  snippetHTML=`<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false" style="height: 60vh;margin-bottom: 5vh;">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner" style="height: 100%;position: relative;">
                  <div class="carousel-item active" style="height: 100%;">
                    <div
                      style="height:30vh;background-image: url(./../../../assets/images/cip_background.jpg);width: 100%;height: 100%;background-repeat: no-repeat;background-size: cover;background-position: center;">
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Voor allen, door allen</h5>
                      <p>Centrum Informatiebeveiliging en Privacybescherming (CIP) is een publiek-private 
                          netwerkorganisatie met participanten en kennispartners.Participanten zijn 
                          medewerkers uit de overheid, semioverheid en zorg. Kennispartners zijn medewerkers van marktpartijen, 
                          die een convenant met CIP zijn aangegaan om bij te dragen aan de kennisdeling.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item" style="height: 100%;">
                      <div
                      style="height:30vh;background-image: url(./../../../assets/images/cip_background.jpg);width: 100%;height: 100%;background-repeat: no-repeat;background-size: cover;background-position: center;">
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Voor allen, door allen</h5>
                      <p>Centrum Informatiebeveiliging en Privacybescherming (CIP) is een publiek-private 
                          netwerkorganisatie met participanten en kennispartners.Participanten zijn 
                          medewerkers uit de overheid, semioverheid en zorg. Kennispartners zijn medewerkers van marktpartijen, 
                          die een convenant met CIP zijn aangegaan om bij te dragen aan de kennisdeling.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item" style="height: 100%;">
                      <div
                      style="height:30vh;background-image: url(./../../../assets/images/cip_background.jpg);width: 100%;height: 100%;background-repeat: no-repeat;background-size: cover;background-position: center;">
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Voor allen, door allen</h5>
                      <p>Centrum Informatiebeveiliging en Privacybescherming (CIP) is een publiek-private 
                          netwerkorganisatie met participanten en kennispartners.Participanten zijn 
                          medewerkers uit de overheid, semioverheid en zorg. Kennispartners zijn medewerkers van marktpartijen, 
                          die een convenant met CIP zijn aangegaan om bij te dragen aan de kennisdeling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>`;
  constructor() { 


  }

  ngOnInit(): void {
    this.passSnippets.emit({html:this.snippetHTML,css:null})
  }

}
