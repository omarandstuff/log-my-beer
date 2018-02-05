export function logBeer(log) {
  return {
    type: 'LOG_BEER',
    log: log
  }
}

export function dismiss() {
  return {
    type: 'DISMISS'
  }
}

export function clear() {
  return {
    type: 'CLEAR'
  }
}
