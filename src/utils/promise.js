export function makeCancelable(promise) {
  let canceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val => (canceled ? reject({ isCanceled: true }) : resolve(val)));
    promise.catch(error => (canceled ? reject({ isCanceled: true }) : reject(error)));
  });
  return {
    promise: wrappedPromise,
    cancel() {
      canceled = true;
    },
  };
}

export default makeCancelable;
