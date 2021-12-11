import React, { useState } from 'react'

function Home (props) {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	// in the future, allItems will be passed down as props from app.js
	//the below is an array of test data
	let allItems = [
			{
			"._id": 1,
			"CreatorId": 1,
			"RecipientId": null ,
			"Category": "Coat",
			"Description": "This is a really nice coat, just don't need it anymore",
			"Zipcode": 10017,
			"imgurl": "",
			"timestamp": 1
			},
			{
			"_id": 2,
			"CreatorId": 1,
			"RecipientId": null ,
			"Category": "Household",
			"Description": "test Queen size, unopend bedding set",
			"Zipcode": 10017,
			"imgurl": "",
			"timestamp": 2
			},
			{
				"_id": 3,
				"CreatorId": 1,
				"RecipientId": null ,
				"Category": "Household",
				"Description": "test Queen size, unopend bedding set",
				"Zipcode": 10017,
				"imgurl": "",
				"timestamp": 2
				},
				{
				"_id": 4,
				"CreatorId": 1,
				"RecipientId": null ,
				"Category": "Accessories",
				"Description": "unopened five pack of socks",
				"Zipcode": 10017,
				"imgurl": "",
				"timestamp": 3
				},
				{
				"_id": 5,
				"CreatorId": 1,
				"RecipientId": null ,
				"Category": "Outdoor",
				"Description": "10 foot hose",
				"Zipcode": 10017,
				"imgurl": "",
				"timestamp": 3
				}
			
	]
	//set state that will hold all data that matches search


	//write a function that will set state accoring to form submission
	const searchItems = (e) => {
		e.preventDefault()
		console.log('search: ', e.target.search.value)
		let srch = e.target.search.value
		console.log('zipcode: ', e.target.zipcode.value)
		let zip = e.target.zipcode.value

		// let results = 

		///////the Below code is copy pasted from Fruit Filter, to refactor with our app
		// handleFilterChange = (e) => {
		// 	//set up a filter that removes fruits that don't match the value in the input
		// 	//referring to each fruit as f
		// 	const filteredFrutisList = this.props.fruits.filter((f) => {
		// 		return f.toLowerCase().includes(e.target.value.toLowerCase())
		// 	})
		// 	//then we will set state with the new array of fruits 
		// 	console.log('this is the new list of fruits: ', filteredFrutisList)
		// 	this.setState({
		// 		fruitsToDisplay: filteredFrutisList
		// 	})
		// }
		/////////////////////////////////

	}

    return (
        <>
		<h2>Home Page</h2>

		<h3>What do you need?</h3>
            <form onSubmit={searchItems}>
                <label htmlFor="search">Search</label>
                <input type="text" name="search" id="search"/>

				<label>Zipcode</label>
				<input type="number" name="zipcode" id="zipcode" />

				<input type="submit"/>
            </form>
        </>
    )
}

export default Home 