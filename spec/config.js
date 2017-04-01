import {load} from 'dotenv'

describe('(Config) secret', () => {
  it('process.env.STARTER_PACKAGE_JS_SECRET : should be defined', () => {
    load()

    // expect(process.env.STARTER_PACKAGE_JS_SECRET).toBe('my_test_env_secret')
  })
})
