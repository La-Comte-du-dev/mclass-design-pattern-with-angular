import { Component, OnInit } from '@angular/core';
import { GetPdfContractService } from 'src/app/pdf/shared/get-pdf-contract.service';
import { GetPdfConventionService } from 'src/app/pdf/shared/get-pdf-convention.service';

@Component({
  selector: 'dp-get-pdf',
  templateUrl: './get-pdf.component.html',
  styleUrls: ['./get-pdf.component.scss']
})
export class GetPdfComponent implements OnInit {

  constructor(
    private _getPdfContractService: GetPdfContractService,
    private _getPdfConventionService: GetPdfConventionService,
  ) { }

  ngOnInit(): void {
  }

  public getPDFContract(): void {
    this._getPdfContractService.generate('contract');
  }
  public getPDFConvention(): void {
    this._getPdfConventionService.generate('convention');
  }
}
