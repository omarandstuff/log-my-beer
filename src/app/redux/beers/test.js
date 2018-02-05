import * as actions from './actions'
import store from '../store'
import moment from 'moment'

beforeEach(() => {
  store.dispatch(actions.clear())
})

describe('Redux::Beers', () => {
  describe('#UNRECONIZED_ACTION', () => {
    it('let the state as it is', () => {
      const initialState = store.getState()

      store.dispatch({ type: 'UNDEFINED' })

      const curretState = store.getState()
      expect(curretState).toEqual(initialState)
    })
  })

  describe('#logBeer', () => {
    it('adds the log to the log list', () => {
      const log1 = {
        beer: 'Beer1',
        count: 1,
        loggedAt: moment()
      }

      const log2 = {
        beer: 'Beer2',
        count: 1,
        loggedAt: moment()
      }

      // Log the first beer
      store.dispatch(actions.logBeer(log1))

      var curretState = store.getState()
      expect(curretState.get('logs').toJS()).toEqual([log1])

      // Log a second beer
      store.dispatch(actions.logBeer(log2))

      curretState = store.getState()
      expect(curretState.get('logs').toJS()).toEqual([log1, log2])
    })

    it('sets status as promting', () => {
      const log = {
        beer: 'Beer1',
        count: 1,
        loggedAt: moment()
      }

      var curretState = store.getState()
      expect(curretState.get('status')).toEqual(undefined)

      store.dispatch(actions.logBeer(log))

      curretState = store.getState()
      expect(curretState.get('status')).toEqual('PROMPTING')
    })

    describe('when adding a beer for the first time', () => {
      it('sets the beer count to the be log count', () => {
        const log = {
          beer: 'Beer1',
          count: 69,
          loggedAt: moment()
        }

        // Beer count is undefined at first
        var curretState = store.getState()
        expect(curretState.getIn(['counts', 'Beer1'])).toBe(undefined)

        // Log the beer to set the first total beer count
        store.dispatch(actions.logBeer(log))
        curretState = store.getState()
        expect(curretState.getIn(['counts', 'Beer1'])).toBe(69)
      })
    })

    describe('when adding a second beer of the same name', () => {
      it('adds the beer log count to the total beer count', () => {
        const log1 = {
          beer: 'Beer1',
          count: 34,
          loggedAt: moment()
        }

        const log2 = {
          beer: 'Beer1',
          count: 35,
          loggedAt: moment()
        }

        // Log the first one
        store.dispatch(actions.logBeer(log1))

        // Log the second same beer
        store.dispatch(actions.logBeer(log2))

        var curretState = store.getState()
        expect(curretState.getIn(['counts', 'Beer1'])).toBe(69)
        expect(curretState.get('logs').toJS()).toEqual([log1, log2])
      })
    })
  })

  describe('#dismiss', () => {
    it('clears the status value', () => {
      const log = {
        beer: 'Beer1',
        count: 1,
        loggedAt: moment()
      }

      store.dispatch(actions.logBeer(log))
      store.dispatch(actions.dismiss())

      var curretState = store.getState()
      expect(curretState.get('status')).toEqual(undefined)
    })
  })

  describe('#clear', () => {
    it('clears th state to empty counts hash and empty logs array', () => {
      const log1 = {
        beer: 'Beer1',
        count: 1,
        loggedAt: moment()
      }

      const log2 = {
        beer: 'Beer2',
        count: 1,
        loggedAt: moment()
      }

      // Log the beers
      store.dispatch(actions.logBeer(log1))
      store.dispatch(actions.logBeer(log2))

      store.dispatch(actions.clear())

      var curretState = store.getState()
      const initialState = {
        counts: {},
        logs: []
      }
      expect(curretState.toJS()).toEqual(initialState)
    })
  })
})
