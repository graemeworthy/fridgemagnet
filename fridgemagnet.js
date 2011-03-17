Fridgemagnet = {
	supported: function() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch(e) {
			return false;
		}
	},
	storage_check: function(url) {
		return !!localStorage[url];
	},
	fetch: function(url) {
		var mycopy = null;
		if (Fridgemagnet.supported() && Fridgemagnet.storage_check(url)) {
			mycopy_data = localStorage[url];
			mycopy = eval(mycopy_data);
			setTimeout(Fridgemagnet.normal_fetch, 20000, url, false); // background update
		} else {
			mycopy = Fridgemagnet.normal_fetch(url, true); // blocking fetch 
		}
		return mycopy;
	},
	save: function(url, data) {
	  try {
	    localStorage[url] = data;
	  } catch (e) {
	    return false;
	  }	
	 return true;
	},
	normal_fetch: function(url, blocking) {
		var is_blocking = !!blocking;
		var myurl = url;
		var mycopy;
		$.ajax({
			url: myurl,
			async: (is_blocking ? false : true),
			success: function(data) {
				mycopy = eval(data);
				Fridgemagnet.save(myurl, data);
			},
			error: function(data) {
				
			}
		});
		return mycopy;
	}
};
