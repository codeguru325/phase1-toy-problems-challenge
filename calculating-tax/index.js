function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates
    const taxRates = [
      { min: 0, max: 24000, rate: 10.0 },
      { min: 24001, max: 32333, rate: 25.0 },
      { min: 32334, max: 500000, rate: 30.0 },
      { min: 500001, max: 800000, rate: 32.5 },
      { min: 800001, max: Infinity, rate: 35.0 },
    ];
  
    // Constants for NHIF deductions
    const nhifDeductions = [
      { min: 0, max: 5999, deduction: 150 },
      { min: 6000, max: 7999, deduction: 300 },
      { min: 8000, max: 11999, deduction: 400 },
      { min: 12000, max: 14999, deduction: 500 },
      { min: 15000, max: 19999, deduction: 600 },
      { min: 20000, max: 24999, deduction: 750 },
      { min: 25000, max: 29999, deduction: 850 },
      { min: 30000, max: 34999, deduction: 900 },
      { min: 35000, max: 39999, deduction: 950 },
      { min: 40000, max: 44999, deduction: 1000 },
      { min: 45000, max: 49999, deduction: 1100 },
      { min: 50000, max: 59999, deduction: 1200 },
      { min: 60000, max: 69999, deduction: 1300 },
      { min: 70000, max: 79999, deduction: 1400 },
      { min: 80000, max: 89999, deduction: 1500 },
      { min: 90000, max: 99999, deduction: 1600 },
      { min: 100000, max: Infinity, deduction: 1700 },
    ];
  
    // Constants for NSSF tiers
    const nssfTiers = [
      { min: 0, max: 6000, tier: 'I' },
      { min: 6001, max: 18000, tier: 'II' },
    ];
  
    // Calculate gross salary (basic salary + benefits)
    const grossSalary = basicSalary + benefits;
  
    // Calculate NHIF deduction
    let nhifDeduction = 0;
    for (const nhifRange of nhifDeductions) {
      if (grossSalary >= nhifRange.min && grossSalary <= nhifRange.max) {
        nhifDeduction = nhifRange.deduction;
        break;
      }
    }
  
    // Calculate NSSF deduction
    let nssfDeduction = 0;
    for (const nssfTier of nssfTiers) {
      if (basicSalary >= nssfTier.min && basicSalary <= nssfTier.max) {
        nssfDeduction = basicSalary * 0.06;
        break;
      }
    }
  
    // Calculate annual taxable pay for PAYE
    const annualTaxablePay = grossSalary * 12;
  
    // Calculate PAYE (Income Tax)
    let payee = 0;
    for (const taxRange of taxRates) {
      if (annualTaxablePay >= taxRange.min && annualTaxablePay <= taxRange.max) {
        payee = (annualTaxablePay * (taxRange.rate / 100)) / 12;
        break;
      }
    }
  
    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
  
    // Return the calculated values
    return {
      grossSalary,
      payee,
      nhifDeduction,
      nssfDeduction,
      netSalary,
    };
  }
  