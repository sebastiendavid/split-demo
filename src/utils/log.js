const levels = {
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
};

const loglevel = (() => {
  let level;
  return () => {
    if (level >= 0) {
      return level;
    } else if (document.location.search.length > 0) {
      const query = (document.location.search
        .split('?')[1]
        .split('&')
        .find(q => q.toLowerCase().indexOf('loglevel') === 0) || '')
        .split('=')[1] || '';
      level = levels[query.toLowerCase()] || 0;
    } else {
      level = 0;
    }
    return level;
  };
})();

export function error(msg) {
  if (loglevel() >= levels.error) {
    console.error(msg);
  }
}

export function warn(msg) {
  if (loglevel() >= levels.warn) {
    console.warn(msg);
  }
}

export function info(msg) {
  if (loglevel() >= levels.info) {
    console.info(msg);
  }
}

export function debug(msg) {
  if (loglevel() >= levels.debug) {
    console.debug(msg);
  }
}
