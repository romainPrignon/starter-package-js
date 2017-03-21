import {prime} from 'config'

export class Prime {
  constructor(divisor) {
    this.divisor = divisor || prime.divisor
  }

  isPrime(n) {
    let currentDivisor = this.divisor

    while (n > currentDivisor) {
      if (n % currentDivisor === 0) {
        return false
      } else {
        currentDivisor++
      }
    }

    return true
  }

  primeFactors(n) {
    let factors = []
    let currentDivisor = this.divisor
    let currentN = n

    while (currentN > 2) {
      if (currentN % currentDivisor === 0) {
        factors.push(currentDivisor)
        currentN = currentN / currentDivisor
      } else {
        currentDivisor++
      }
    }

    return factors
  }
}
