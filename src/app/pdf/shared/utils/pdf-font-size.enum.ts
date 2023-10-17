export enum EPdfFontSize {
    BIG_TITLE = 20,
    H1 = 14,
    H2 = 12,

    P = 9,
    P_BIGGER = 10,
    P_SMALLER = 8,
}

export type EAllPdfFontSize =
    EPdfFontSize.BIG_TITLE |
    EPdfFontSize.H1 |
    EPdfFontSize.H2 |
    EPdfFontSize.P |
    EPdfFontSize.P_BIGGER |
    EPdfFontSize.P_SMALLER;