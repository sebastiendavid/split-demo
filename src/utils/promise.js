export function makeCancellable(promise) {
  let cancelled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => (cancelled ? reject({ iscancelled: true }) : resolve(val))
    );
    promise.catch(
      error => (cancelled ? reject({ iscancelled: true }) : reject(error))
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      cancelled = true;
    },
  };
}

export default makeCancellable;
