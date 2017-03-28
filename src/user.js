// @flow

import _ from 'lodash'

const longComputation = async (a, b) => a + b

export const sortUserByAge = (users: Array<User>): Array<User> =>
  _(users)
    .sortBy(user => user.age)
    .value()

export const getUserOrderTotalPrice = async (user) =>
  _(user.orders)
    .reduce(
      async (acc, u) => await longComputation(acc, u.price),
      0
    )

export const addUsersAgeCategory = (users) =>
  _(users)
    .map(user => {
      const category = user.age < 50 ? 'young' : 'old'

      return {
        ...user,
        category
      }
    })
    .value()
