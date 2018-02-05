import * as builder from './builder'

export default function reducer(state, action) {
  switch (action.type) {
    case '@@redux/INIT':
      return builder.clear()
    case 'LOG_BEER':
      return builder.logBeer(state, action.log)
    case 'DISMISS':
      return builder.dismiss(state)
    case 'CLEAR':
      return builder.clear()

    default:
      return state
  }
}
