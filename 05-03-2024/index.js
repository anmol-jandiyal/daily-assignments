const { MongoClient } = require("mongodb");
const express = require("express");

const url = "mongodb://localhost:27017/";

const server = express();

//<========================================================>
//<===================PIPELINE EXAMPLES========================>
//<========================================================>

//<-------1. Unrated movies----------------->
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

//<-----------------------2. MOVIES OR SERIES THAT HAS RATING GREATER THAN 8>
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

// <--------------3. MOVIE GROUPED BASED UPON LANGUAGES---------------------->
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

//<---------------------4. ten latest movies------------------->
/* const pipeline = [
	{
		$sort: {
			released: -1,
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

//<------------------5. segregation movies and series--------------->
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

//<------------------6. to ten movies that received max no. of awards  --------------->
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

//<-----------7. grouping movies based upon genre------------------------->
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

//<----------8. Movies released in 2015 in India and have language = hindi ---------------------- >
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

//<----------9. movies having genres as comedy and animation and excluding "Short" ---------------------- >
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

//<--------------------10. top 5 direcotrs who directed large no. of movies----------------- >
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

//<-------------11. top 5 actors casted in max no. of movies------------------------>
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

//<------------12. movies/series segregated based upon country------------->
/* const pipeline = [
	{
		$unwind: {
			path: "$countries",
		},
	},
	{
		$group: {
			_id: "$countries",
			movies: {
				$push: "$title",
			},
		},
	},
]; */

//<------------13. movies/series directed by 3 or more persons------------->

/* const pipeline = [
	{
		$addFields: {
			noOfDirectors: { $size: "$directors" },
		},
	},
	{
		$match: {
			noOfDirectors: {
				$gt: 2,
			},
		},
	},
	{
		$limit: 10,
	},
	{
		$project: {
			title: 1,
			noOfDirectors: 1,
			directors: 1,
		},
	},
];
 */

//<------------14. spliting movies based upon rating ------------->
/* const pipeline = [
	{
		$match: {
			type: "movie",
		},
	},
	{
		$group: {
			_id: "$rated",
			movies: {
				$push: "$title",
			},
		},
	},
]; */

//<-----------15. count of movies having imdb rating between 6to 7 ------------->
const pipeline = [
	{
		$match: {
			"imdb.rating": {
				$lt: 7,
				$gte: 6,
			},
		},
	},
	{
		$limit: 100,
	},
	{
		$project: {
			title: 1,
		},
	},
];

//<===========================================================>
//<===========================================================>
//<===========================================================>
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
