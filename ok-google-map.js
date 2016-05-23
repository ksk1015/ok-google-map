(function(){

	var NS = 'okGoogleMap';
	var API_URL = 'https://maps.googleapis.com/maps/api/js?';

	var key = '';
	var loaded = false;
	var complete = false;

	var callbacks = [];

	var load = function(_key){
		if ( loaded ) {
			return;
		}
		loaded = true;

		if ( _key ) {
			key = _key;
		}

		var _s = document.createElement('script');
		_s.setAttribute('async', 1);
		_s.setAttribute('defer', 1);
		_s.src = API_URL + 'key=' + key + '&callback=' + NS + '.callback';
		document.querySelector('head').appendChild(_s);
	};

	var callback = function(){
		complete = true;
		callbacks.forEach(function(_callback){
			_callback();
		});
	};

	var okGoogleMap = function(_callback){
		if ( complete ) {
			_callback();
		} else {
			callbacks.push(_callback);
		}
		if ( !loaded ) {
			load();
		}
	};

	okGoogleMap.setKey = function(_key){
		key = _key;
	};
	okGoogleMap.getKey = function(){
		return key;
	};

	okGoogleMap.loaded = function(){
		return loaded;
	};
	okGoogleMap.complete = function(){
		return complete;
	};

	okGoogleMap.load = load;

	okGoogleMap.callback = callback;

	window[NS] = okGoogleMap;

})();