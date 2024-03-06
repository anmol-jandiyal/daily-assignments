const { MongoClient } = require("mongodb");
const express = require("express");

const url = "mongodb://localhost:27017/";

const server = express();

//<-------UNRATED MOVIES----------------->
/* const pipeline = [
	{
		$match: {
			rated: { $eq: "UNRATED" },
		},
	},
	{
		$project: {
			title: 1,
			type: 1,
		},
	},
]; */

//<-----------------------MOVIES OR SERIES THAT HAS RATING GREATER THAN 6>
/* const pipeline = [
	{
		$match: {
			"imdb.rating": { $gt: 8 },
		},
	},

	{
		$project: { imdb: 1, title: 1, plot: 1, type: 1 },
	},
]; */

// <--------------MOVIE GROUPED BASED UPON LANGUAGES---------------------->
/* const pipeline = [
	{
		$unwind: "$languages",
	},
	{
		$group: {
			_id: "$languages",
			movieName: {
				$push: "$title",
			},
			movieCount: { $sum: 1 },
		},
	},
	{
		$sort: {
			movieCount: -1,
		},
	},
]; */

//<---------------------ten latest movies------------------->
/* const pipeline = [
	{
		$sort: {
			released: 1,
		},
	},
	{
		$limit: 10,
	},
	{
		$project: {
			title: 1,
			genres: 1,
		},
	},
]; */

//<------------------segregation movies and series--------------->
/* const pipeline = [
	{
		$group: {
			_id: "$type",

			titles: {
				$push: "$title",
			},
		},
	},
]; */

//<------------------to ten movies that received max no. of awards  --------------->
/* const pipeline = [
	{
		$match: {
			type: "movie",
		},
	},
	{
		$sort: {
			"awards.wins": -1,
		},
	},
	{
		$limit: 10,
	},
	{
		$project: {
			awards: "$awards.wins",
			title: 1,
			plot: 1,
			genres: 1,
		},
	},
]; */

//<-----------grouping movies based upon genre------------------------->
/* const pipeline = [
	{
		$match: {
			type: "movie",
		},
	},
	{
		$unwind: {
			path: "$genres",
		},
	},
	{
		$group: {
			_id: "$genres",
			count: { $sum: 1 },
			movieTitle: { $push: "$title" },
		},
	},
]; */

//<----------Movies released in 2015 in India and have language = hindi ---------------------- >
/* const pipeline = [
	{
		$match: {
			year: 2015,
			countries: "India",
			languages: "Hindi",
		},
	},
	{
		$project: {
			title: 1,
			cast: 1,
			"imdb.rating": 1,
		},
	},
]; */

//<----------movies having genres as comedy and animation and excluding "Short" ---------------------- >
/* const pipeline = [
	{
		$match: {
			genres: {
				$all: ["Comedy", "Animation"],
			},
		},
	},
	{
		$match: {
			genres: {
				$nin: ["Short"],
			},
			"imdb.rating": {
				$gt: 7,
			},
		},
	},
	{
		$project: {
			title: 1,
			cast: 1,
			"imdb.rating": 1,
			fullplot: 1,
			genres: 1,
		},
	},
]; */

//<--------------------top 5 direcotrs who directed large no. of movies----------------- >
/* const pipeline = [
	{
		$unwind: {
			path: "$directors",
		},
	},
	{
		$group: {
			_id: "$directors",
			movieCount: {
				$sum: 1,
			},
		},
	},
	{
		$sort: {
			movieCount: -1,
		},
	},
	{
		$limit: 5,
	},
]; */

//<-------------top 5 actors casted in max no. of movies------------------------>
/* const pipeline = [
	{
		$unwind: {
			path: "$cast",
		},
	},
	{
		$group: {
			_id: "$cast",
			movieCount: {
				$sum: 1,
			},
		},
	},
	{
		$sort: {
			movieCount: -1,
		},
	},
	{
		$limit: 5,
	},
];
 */
async function aggregationFunction(collection) {
	try {
		const result = await collection.aggregate(pipeline).toArray();
		console.log(result);
	} catch (error) {
		console.log("error occurred while performing aggregation", error);
	}
}

async function main() {
	const client = await new MongoClient(url);

	try {
		await client.connect();
		console.log("connection with db establised successsfully");

		const db = client.db("mydb");

		const collection = db.collection("movies");

		// console.log(await collection.find({ rated: "UNRATED" }).toArray());

		server.listen(8080, (err) => {
			if (err) {
				console.log("Not able to start server");
			} else {
				console.log("Server started");
				aggregationFunction(collection);
			}
		});
	} catch (err) {
		console.log(err);
	}
}

main();
