export class AmigaFrequencyTable {
  static ComputePeriod() {
    /* TODO: IMPLEMENT IT USING 
     *  Period = (PeriodTab[(Note MOD 12)*8 + FineTune/16]*(1-Frac(FineTune/16)) +
     *              PeriodTab[(Note MOD 12)*8 + FineTune/16]*(Frac(FineTune/16)))
     *                          *16/2^(Note DIV 12);
     *                                (The period is interpolated for finer finetune values)
     *
     *
     * PeriodTab = Array[0..12*8-1] of Word = (
     *  907,900,894,887,881,875,868,862,856,850,844,838,832,826,820,814,
     *  808,802,796,791,785,779,774,768,762,757,752,746,741,736,730,725,
     *  720,715,709,704,699,694,689,684,678,675,670,665,660,655,651,646,
     *  640,636,632,628,623,619,614,610,604,601,597,592,588,584,580,575,
     *  570,567,563,559,555,551,547,543,538,535,532,528,524,520,516,513,
     *  508,505,502,498,494,491,487,484,480,477,474,470,467,463,460,457);
     */
    throw "Not implemented yet";
  }

  static ComputeFrequency() {
    //TODO: IMPLEMENT IT
    //Frequency = 8363*1712/Period;
    throw "Not implemented yet";
  }
}
