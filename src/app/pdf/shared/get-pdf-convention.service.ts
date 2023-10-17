import { Injectable } from '@angular/core';
import { GetPdfTemplateMethodService } from './models/get-pdf-template-method.service';
import { EPdfFontSize } from './utils/pdf-font-size.enum';

@Injectable({
  providedIn: 'root'
})
export class GetPdfConventionService extends GetPdfTemplateMethodService {

  constructor() {
    super();
  }

  protected override createBody(): void {
    this.setFontSize(EPdfFontSize.P_SMALLER)
    this.getDoc().text(
      [
       `Ceci est le corps d'implémentation de la méthode CreateBody()`,
       `qui me permet d'écrire la logique métier propre à`,
       `CONVENTION`
      ],
      this.getDocPageSize() / 2, this.getDocProportions().pdfHeightStarts + 50, { align: 'center' }
    );
  }

}
