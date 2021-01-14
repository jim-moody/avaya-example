const note = {
  body:
    "L/H: SOME CREDIT UNION\nPh#: \t603-555-5555\nSpoke With:\tLisa\n\t\nFax#: \tloan.servicing@loanservicing.org\nLienholder Physical Address: \t5940 Some Highway I-35\n\tSomwhere, USA 012345\n\t\n\t\nAcct #: \t012456\n\t\nName on Title:\tn/a\nPayoff: \t$99,999.99\nPer Diem: \t$9.99\nGood To: \t11/9/2018\nLOG Requested Y/N:\tY\nExpected LOG Received:\t3 - 5 Business Hours\nSalvage Company to send title to:\tCopart\nAttention Lot #:\t01234567\nStreet address to send title to:\t505 SOME ROAD\nCity & State to send title to:\tSOME CITY, ST 012345\nLeased / Financed or Loaned\tFINANCED/LOAN\n\nSpoke with Person, LH was able to provide the Payoff Amount, Per Diem and Good to Date. Faxed LOG Request along with Settlement Breakdown, Cause of Loss, and Valuation Report . As per LH the LOG will be received within 3 - 5 business days.",
};

let notes = [];
for (let i = 0; i < 100; i++) {
  notes.push(note);
}

export default notes;
