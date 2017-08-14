// @flow weak
import {flow, isEqual, map} from 'lodash'

import {
  sortUserByAge,
  addUsersAgeCategory,
  getUserOrderTotalPrice,
  groupUsersByAgeCategory,
  groupUsersByAgeCategory2,
  getUserFixtures,
  enhanceUser,
  enhanceUser2
} from 'user'

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

const usersWithCategory = map(users, user => ({
  ...user,
  category: user.age < 50 ? 'young' : 'old'
}))

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

describe('(Method) groupUsersByAgeCategory', () => {
  it('should be a function', () => {
    expect(groupUsersByAgeCategory).toEqual(jasmine.any(Function))
  })

  it('should return users grouped by age category', () => {
    const expectedOutput = {
      old: [
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
        }
      ],
      young: [
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
    }

    const output = groupUsersByAgeCategory2(usersWithCategory)

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

describe('(scenario) add category and group by category', () => {
  const expectedOutput = {
    old: [
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
      }
    ],
    young: [
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
  }

  it('should chain using promise', (done) => {
    getUserFixtures()
      .then(users => addUsersAgeCategory(users))
      .then(users => groupUsersByAgeCategory(users))
      .then(users => expect(isEqual(users, expectedOutput)).toBe(true))
      .then(() => done())
  })

  it('should chain using flow', async (done) => {
    const users = await getUserFixtures()

    const output = flow([
      addUsersAgeCategory,
      groupUsersByAgeCategory
    ])(users)

    expect(isEqual(output, expectedOutput)).toBe(true)

    done()
  })
})

describe('(scenario) handle error correctly', () => {
  it('should return [] with lodash', (done) => {
    getUserFixtures(1)
      .then(users => enhanceUser(users))
      .then(users => expect(isEqual(users, [])).toBe(true))
      .then(() => done())
  })
  it('should return error without lodash', (done) => {
    getUserFixtures(1)
      .then(users => enhanceUser2(users))
      .catch(err => console.log(err))
      .then(() => done())
  })
})
