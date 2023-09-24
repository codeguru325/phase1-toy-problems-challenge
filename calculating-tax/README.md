# Net Salary Calculator

This JavaScript program calculates an individual's net salary based on their basic salary and benefits, taking into account tax (PAYE), NHIF deductions, and NSSF deductions.

## Usage

To use the program, you need to provide the following inputs:
- Basic Salary: The individual's monthly basic salary.
- Benefits: Any additional benefits or allowances received by the individual.

After providing these inputs, the program will calculate and display the following:
- Gross Salary: The total monthly salary (Basic Salary + Benefits).
- PAYE (Tax): The monthly income tax deduction (Pay-As-You-Earn).
- NHIF Deduction: The monthly NHIF health insurance deduction.
- NSSF Deduction: The monthly NSSF (National Social Security Fund) deduction.
- Net Salary: The individual's net monthly salary after deductions.

## Tax Rates (PAYE)

The program uses the following tax rates for calculating PAYE:
- Up to 24,000 Ksh: 10.0%
- 24,001 - 32,333 Ksh: 25.0%
- 32,334 - 500,000 Ksh: 30.0%
- 500,001 - 800,000 Ksh: 32.5%
- Above 800,000 Ksh: 35.0%

## NHIF Deductions

NHIF deductions are calculated based on the individual's Gross Pay and vary depending on the range. The program determines the NHIF deduction based on the provided Gross Pay.

## NSSF Deductions

NSSF deductions are based on tiers determined by the individual's basic salary:
- Tier I: Up to 6,000 Ksh
- Tier II: 6,001 - 18,000 Ksh