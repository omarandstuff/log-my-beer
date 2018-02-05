import Immutable from 'immutable'

export function logBeer(state, log) {
  const countsUpdater = current => {
    return (current || 0) + log.count
  }

  const logsUpdater = logList => {
    return logList.push(Immutable.Map(log))
  }

  return state.updateIn(['counts', log.beer], countsUpdater)
              .update('logs', logsUpdater)
              .set('status', 'PROMPTING')
}

export function dismiss(state) {
  return state.delete('status')
}

export function clear() {
  const initialState = {
    counts: {},
    logs: []
  }

  return Immutable.fromJS(initialState)
}

