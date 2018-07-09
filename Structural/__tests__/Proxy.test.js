const { addToImageCache, proxiedNetworkFetch } = require('../Proxy');

describe('Proxy Design Pattern Tests', function() {
  it('should return from network', function() {
    expect(proxiedNetworkFetch('catPic.jpg')).toEqual('catPic.jpg - Response from network');
  });

  it('should return from cache', function() {
    expect(proxiedNetworkFetch('dogPic.jpg')).toEqual('dogPic.jpg - Response from network');
    expect(proxiedNetworkFetch('dogPic.jpg')).toEqual('dogPic.jpg - Response from cache');
  });
});
