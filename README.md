Fridgemagnet.js
============
A practical implementation of the html5 localStorage key value store.

What I used it for
------------------
A server-generated js file was holding the data for a javascript web page.
But the server took forever to generate the file, that data was the bottleneck.
So i cached it, took the page load time down to 2 seconds from 20.
Life is awesome.


Usage
--------------   
Fridgemagnet.fetch('myfancyjson.js')


problems?
---------------
I don't know if eval() is the right way of converting my stringified data back and forth to javascript.


future work?
---------------
It might be nice to have some sort of timestamp on a url so you can see if there's something worth downloading. (last updated)
It might also be nice to be able to pass in a list of files.
Howsabout some callbacks?



