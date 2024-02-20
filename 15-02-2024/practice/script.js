//json file  stores data in the  form of key pair where key must b in strings

//promise in real practice

// front end and backend communicate with each other using some protocols like (http)
// promise can be used to stop the excution of the code until response have not been received from backend

const url = "https://jsonplaceholder.typicode.com/posts"; //fake api for getting data

//fetch API
/* console.log("start");

fetch(url) //fetch only consider 500 wale error and all other errors are ignored
	.then((response) => {
		console.log(response);
		// console.log(response.json()); //response.json() aganin return a promise
		// console.log(response.json()); //response.json() aganin return a promise
		return response.json();
	})
	//response.json() exectues only one time  //else we get an error
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	}); //returns a promise

console.log("end"); */

////////////////////////////////////////////////////////
//async functions
//asynchronous function that always pass a promise and wrap the value we passed on
/* 
async function getData() {
	// return "hello";
	const resp = await fetch(url); //will wait the fetch to resolve and assign the response in the resp;
	console.log(resp);

	// const body = resp.json();   //returns the promise
	// but  if we want to get the resolved value then we can user await

	const body = await resp.json(); //return the body
	console.log(body);

	return body; //this body got wrapped in promise and returned
}

//we cannot use await outside the async function
// const pr = await  getData(); //error

const pr = getData();

pr.then((responseBody) => {
	console.log("in then statement");
	console.log(responseBody);
}); */

/* pr.then((data) => {
	console.log(data);
	return data.json();
}); */

// async await  -> replaces the promise construct

async function getData() {
	console.log("Inner 1");

	const resp = await fetch(url);
	console.log("Inner 2");

	const body = await resp.json();
	console.log(body);

	return body; //this body got wrapped in promise and returned
}

//we cannot use await outside the async function
// const pr = await  getData(); //error

console.log("start");
const pr = getData();
console.log("end");
