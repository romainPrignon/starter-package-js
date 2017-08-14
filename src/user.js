// @flow weak

import _ from 'lodash'

const longComputation = async (a: number, b: number): Promise<number> => a + b

export const sortUserByAge = (users: Array<User>): Array<User> =>
  _(users)
    .sortBy(user => user.age)
    .value()

export const getUserOrderTotalPrice = async (user: User): Promise<number> =>
  _(user.orders)
    .reduce(
      async (acc, u) => await longComputation(acc, u.price),
      0
    )

export const addUsersAgeCategory = (users: Array<User>): Array<User> =>
  _(users)
    .map(user => {
      const category = user.age < 50 ? 'young' : 'old'

      return {
        ...user,
        category
      }
    })
    .value()

export const groupUsersByAgeCategory = (users: Array<User>): Object =>
  _(users)
    .reduce(
      (acc, user) => {
        return user.category === 'young'
          ? {
            ...acc,
            young: acc.young.concat(user)
          } : {
            ...acc,
            old: acc.old.concat(user)
          }
      }, {young: [], old: []})

export const groupUsersByAgeCategory2 = (users: Array<User>): Object =>
  users.reduce(
    (acc, user) => {
      return user.category === 'young'
        ? {
          ...acc,
          young: acc.young.concat(user)
        } : {
          ...acc,
          old: acc.old.concat(user)
        }
    }, {young: [], old: []})

export const enhanceUser = (users: Array<User>): Array<User> =>
  _(users)
    .map(user => ({
      ...user,
      foo: 'bar'
    }))
    .value()

export const enhanceUser2 = (users: Array<User>): Array<User> =>
  users
    .map(user => ({
      ...user,
      foo: 'bar'
    }))

// 0 = OK, 1 = undefined, 2 = throw
export const getUserFixtures = async (code = 0): Promise<?Array<User>> => {
  if (code === 2 ) throw new Error(`Can't retreive`)
  if (code === 1 ) return undefined
  return [
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
}

// todo: handle error
// on catch toujours au limiut de notre appli
// on ne rethrow pas !
// on return undefined
// on n'utilise donc pas lodash => pas fp
// on utilise lodash => fp du pauvre => on utilise avec _ et value

