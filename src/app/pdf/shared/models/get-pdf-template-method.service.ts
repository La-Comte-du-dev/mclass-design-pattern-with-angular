import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { IPdfSetting } from './pdf-settings.molde';
import { EAllPdfFontSize } from '../utils/pdf-font-size.enum';

@Injectable({
  providedIn: 'root'
})
export abstract class GetPdfTemplateMethodService {

  protected abstract createBody(): void;

  private readonly _DOC_PROPORTIONS: IPdfSetting = {
    pdfWidthStarts: 10,
    pdfWidthEnds: 150,
    pdfHeightStarts: 10,
    pdfHeightEnds: 300
  }

  private _doc!: jsPDF;
  private _title!: string;

  constructor() { }

  public generate(title: string): void {
    this._initializeDoc();
    this._setTitle(title);
    this._createHeader();
    this._createFooter();
    this.createBody();
    this._saveDoc();
  }



  private _initializeDoc(): void {
    this._doc = new jsPDF();
  }

  private _setTitle(title: string): void {
    this._title = title;
  }

  private _createHeader(): void {
    this._doc.text(
      [
        `Header de fou`,
        `Si tu lis ça t'es un bg`
      ],
      this.getDocPageSize() / 2, this._DOC_PROPORTIONS.pdfHeightStarts + 5, { align: 'center' }
    );

  }

  private _createFooter(): void {
    this._doc.text(
      [
        `Footer de fou`,
        `Si tu lis ça t'es un bg`
      ],
      this.getDocPageSize() / 2, this._DOC_PROPORTIONS.pdfHeightEnds - 17.5, { align: 'center' }
    );
  }

  private _saveDoc(): void {
    this._doc.save(this._title + '.pdf');
  }


  protected getDoc(): jsPDF {
    return this._doc;
  }

  protected getDocProportions(): IPdfSetting {
    return this._DOC_PROPORTIONS;
  }

  protected getDocPageSize(): number {
    return this._doc.internal.pageSize.getWidth();
  }

  protected setFontSize(fontSize: EAllPdfFontSize): void {
    this._doc.setFontSize(fontSize);
  }



}
