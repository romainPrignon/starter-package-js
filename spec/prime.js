import {Prime} from '../src/prime'

describe('(Service) Prime', () => {

  describe('(Method) isPrime', () => {

    const prime = new Prime(2)

    it('should be a function', () => {
      expect(prime.isPrime).toEqual(jasmine.any(Function))
    })

    it('isPrime of 4 should return false', () => {
      expect(prime.isPrime(4)).toBe(false)
    })

    it('isPrime of 5 should return true', () => {
      expect(prime.isPrime(5)).toBe(true)
    })
  })

  describe('(Method) primeFactors', () => {

    const prime = new Prime(2)

    it('should be a function', () => {
      expect(prime.primeFactors).toEqual(jasmine.any(Function))
    })

    it('primeFactors of 2 should return []', () => {
      const results = prime.primeFactors(2)

      expect(results).toEqual(jasmine.any(Array))
      expect(results.length).toEqual(0)
    })

    it('primeFactors of 3 should return [3]', () => {
      const results = prime.primeFactors(3)

      expect(results).toEqual(jasmine.any(Array))
      expect(results.length).toEqual(1)
      expect(results[0]).toEqual(3)
    })
  })
})
