const buildError = () =>
  Object.assign(new Error('cancelled promise'), { iscancelled: true });

export function makeCancellable(promise) {
  let cancelled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val => (cancelled ? reject(buildError()) : resolve(val)));
    promise.catch(error => (cancelled ? reject(buildError()) : reject(error)));
  });
  return {
    promise: wrappedPromise,
    cancel() {
      cancelled = true;
    },
  };
}

export default makeCancellable;
