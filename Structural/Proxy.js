/*
	This is a structural design pattern that behaves exactly as its name suggests. It acts as a surrogate or placeholder for another object to control access to it.

	It is usually used in situations where a target object is under constraints and may not be able to handle all its responsibility efficiently. A proxy, in this case, usually provides the same interface to the client and adds a level of indirection to support controlled access to the target object to avoid undue pressure on it.
*/

const IMAGE_CACHE = [];

const addToImageCache = url => IMAGE_CACHE.push(url);

// Target Class
class Image {
	constructor(url) {
		this._url = url;
	}

	loadImage() {
		// assume this is a network request and should be avoided
		return `${this._url} from network`;
	}
}

// proxy class
class ProxyImage {
	constructor(url) {
		this._url = url;
	}

	loadImage() {
		const url = this._url;
		const cachedImage = IMAGE_CACHE.find(image => url === image);
		if (cachedImage) {
			return `${cachedImage} from cache`;
		} else {
			addToImageCache(url);
			return new Image(url).loadImage();
		}
	}
}

module.exports = {
	addToImageCache,
	ProxyImage,
};
