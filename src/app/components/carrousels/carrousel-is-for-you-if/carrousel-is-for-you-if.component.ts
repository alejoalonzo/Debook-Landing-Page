import { CUSTOM_ELEMENTS_SCHEMA,  Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

register();

@Component({
  selector: 'app-carrousel-is-for-you-if',
  standalone: true,

  imports: [TranslateModule],
  templateUrl: './carrousel-is-for-you-if.component.html',
  styleUrl: './carrousel-is-for-you-if.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselIsForYouIfComponent implements OnInit{

  currentLanguageOnCarrouselIsForYou: string = 'es';
  isEn: boolean= false;


  constructor(
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
      this.getLangToCarrousel()
  }

  getLangToCarrousel(){
    this.translate.onLangChange.subscribe(() => {
      this.currentLanguageOnCarrouselIsForYou = this.translate.currentLang;
      if(this.currentLanguageOnCarrouselIsForYou==='es'){
        this.isEn=false
      }else{
        this.isEn=true
      }
    });
  }

}
