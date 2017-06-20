function resetServiceWorkers() {
  return navigator.serviceWorker
    .getRegistrations()
    .then(registrations =>
      Promise.all(registrations.map(registration => registration.unregister()))
    )
    .then(() => console.info('reset service workers: done'));
}

global.resetServiceWorkers = resetServiceWorkers;
