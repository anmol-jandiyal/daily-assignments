// console.log("hello");

// to run the file using node " node <file>"

/* 
        Node is used in the servers 

        we have  front end and backend 
        backend me db related operation hote hai

        traditionally backend pe java, or other server related language ka use kiya jata tha

        but in order to use js in server sites, node js is developed

        node js == v8 engine + wrapped around by js code  node api

        in browse we have global elements like - window, document, prompt, alert, etc but these are not present in node js as it is not required at serve end.

        window, document, prompt, alert etc these all are the browser api (web api) but not the part of javascript 

        similarly we cannot access file directly using the browser. As it allow the hacker to access the file directly.
        This file manipulation can be performed using node api


        What uniquer thing node js provide us?
        -> asynchronous related thing is allowed in browser using web api LIke fetch, setTimeOut etc
        same thing is allowed in node by its available api's
        -> 
        
        java scipt remains the same but node and browse provide it extra features
        node js  - runtime environment

        Javascript is synchronous by itself but asynchronous behaviour is allowed by the node and browsers.
                - single threaded

        
        
        Node api internally uses LIBUV library (written in c) to provide Async I/O
        node uses this library to make js asynchronous

        Let say our server handle each request synchronously then it become lack of user experence 
        so thats the reason why node js is used in the server to make the js asynchronous

        // ////////////////////////////////////////////////////////////////////////
        ////////////////////////Event Loop///////////////////////////////////

        //browse event loop
                setTimeOut(fn,timer) - here when this statement is triggered, fn is attached with web api  along with timer
                as timer ends, the fn enqueue to the micro queue which is checked by event loop

        //node js event loop 
           ther are 5 queues -
                        microtask queue - promises
                        timer -> timer
                        I/O -> io related  reading writing etc 
                        setImmediate 
                        close->  to close any file or event
                
        once our execution of global function ends, event loop will check each queue in the same order, the checking from first queue to last queue is known as 1 tick

        this functionality is managed by LibUV library

        //////////////////////////////////////////////////////////////////////////
        ////////////////////////////event driven programming////////////////
        Node js follow obeserver pattern - design pattern in which we have a subject (youtube channel) and observer (subscirber) - when ever new video got uploaded, it get nofied to each subscribers. 
        kisi be event k trigger hone pr functions run hote hai

*/

/* console.log("Hello");

process.on("exit", function () {
	// applying event to process which will trigger when process exit hoga
	console.log("exit");
});

console.log("end line of process");
 */

const EventEmitter = require("events"); //events  is a module in node that contains event

const ytChannel = new EventEmitter();

ytChannel.on("video uploaded", function () {
	console.log("sent notification to each subscribers");
});

ytChannel.emit("video uploaded");
