
// p2p stream websocket library
var WebSocket = require('wspp');

// connecting to primary name-server
var con = new WebSocket('ws://iwebpp.com:51686');

var t = setTimeout(function(){
    console.log('connecting to primary name-server timeout');
}, 2000); // 2s in default

con.on('open', function(){
    clearTimeout(t);
    console.log('connecting to primary name-server successfully');
    ///con.close(); // comment it by now for un-handle err event on linux
});

// connecting to alternative name-server
var con1 = new WebSocket('ws://iwebpp.com:51868');

var t1 = setTimeout(function(){
    console.log('connecting to alternative name-server timeout');
}, 2000); // 2s in default

con1.on('open', function(){
    clearTimeout(t1);
    console.log('connecting to alternative name-server successfully');
    ///con1.close(); // comment it by now for un-handle err event on linux
});
