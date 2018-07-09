/*
	This is a structural design pattern that behaves exactly as its name suggests. It acts as a surrogate or placeholder for another object to control access to it.

	It is usually used in situations where a target object is under constraints and may not be able to handle all its responsibility efficiently. A proxy, in this case, usually provides the same interface to the client and adds a level of indirection to support controlled access to the target object to avoid undue pressure on it.
*/

// Target
function networkFetch(url) {
  return `${url} - Response from network`;
}

// Proxy
// ES6 Proxy API = new Proxy(target, handler);
const cache = [];
const proxiedNetworkFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const urlParam = args[0];
    if (cache.includes(urlParam)) {
      return `${urlParam} - Response from cache`;
    } else {
      cache.push(urlParam);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

module.exports = {
  proxiedNetworkFetch,
};
