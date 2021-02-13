// @flow weak
import {isEqual} from 'lodash'

import {sortUserByAge, addUsersAgeCategory, getUserOrderTotalPrice, getUserHair} from 'user'

const users: Array<User> = [
  {
    name: 'Elizabeth',
    age: 56,
    hair: 'black',
    orders: [
      {name: 'ham', price: 2, quantity: 2},
      {name: 'bread', price: 1, quantity: 3},
      {name: 'apples', price: 2, quantity: 3},
    ]
  },
  {
    name: 'Martin',
    age: 14,
    orders: [
      {name: 'ham', price: 2, quantity: 2},
      {name: 'eggs', price: 1, quantity: 6},
      {name: 'bacon', price: 5, quantity: 1},
    ]
  }
]

describe('(Method) addUsersAgeCategory', () => {
  it('should be a function', () => {
    expect(addUsersAgeCategory).toEqual(jasmine.any(Function))
  })

  it('should return user with category', () => {
    const expectedOutput = [
      {
        name: 'Elizabeth',
        age: 56,
        hair: 'black',
        orders: [
          {name: 'ham', price: 2, quantity: 2},
          {name: 'bread', price: 1, quantity: 3},
          {name: 'apples', price: 2, quantity: 3},
        ],
        category: 'old'
      },
      {
        name: 'Martin',
        age: 14,
        orders: [
          {name: 'ham', price: 2, quantity: 2},
          {name: 'eggs', price: 1, quantity: 6},
          {name: 'bacon', price: 5, quantity: 1},
        ],
        category: 'young'
      }
    ]

    expect(addUsersAgeCategory(users)).toEqual(expectedOutput)
  })
})

describe('(Method) sortUserByAge', () => {
  it('should be a function', () => {
    expect(sortUserByAge).toEqual(jasmine.any(Function))
  })

  it('should return users sorted by age', () => {
    const expectedOutput = [
      {
        name: 'Martin',
        age: 14,
        orders: [
          {name: 'ham', price: 2, quantity: 2},
          {name: 'eggs', price: 1, quantity: 6},
          {name: 'bacon', price: 5, quantity: 1},
        ]
      },
      {
        name: 'Elizabeth',
        age: 56,
        hair: 'black',
        orders: [
          {name: 'ham', price: 2, quantity: 2},
          {name: 'bread', price: 1, quantity: 3},
          {name: 'apples', price: 2, quantity: 3},
        ]
      }
    ]

    const output = sortUserByAge(users)

    expect(isEqual(output, expectedOutput)).toBe(true)
  })
})

describe('(Method) getUserOrderTotalPrice', async () => {
  it('should be a function', () => {
    expect(getUserOrderTotalPrice).toEqual(jasmine.any(Function))
  })

  it('should return user oder total price', async (done) => {
    // expect(await getUserOrderTotalPrice(users[1])).toEqual(8)

    done()
  })
})

describe('(Method) getUserHair', () => {
  it('should be a function', () => {
    expect(getUserHair).toEqual(jasmine.any(Function))
  })

  it('should return user oder total price', () => {
    expect(getUserHair(users)).toEqual([{
      name: 'Elizabeth',
      hair: 'black'
    }])
  })
})
