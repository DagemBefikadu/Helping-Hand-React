import React, { useState } from 'react'
import ListingIndex from './ListingIndex'

function Home (props) {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	// in the future, allItems will be passed down as props from app.js
	//the below is an array of test data
	let allItems = [
			{
			_id: 1,
			creatorId: 1,
			recipientId: null ,
			category: "Fuzzy Sweater",
			description: "This is a really nice coat, just don't need it anymore",
			zipcode: 10017,
			imgurl: "",
			timestamp: 1
			},
			{
			_id: 2,
			creatorId: 1,
			recipientId: null ,
			category: "Household",
			description: "test Queen size, unopend bedding set",
			zipcode: 10017,
			imgurl: "",
			timestamp: 2
			},
			{
				_id: 3,
				creatorId: 1,
				recipientId: null ,
				category: "Household",
				description: "test Queen size, unopend bedding set",
				zipcode: 10014,
				imgurl: "",
				timestamp: 2
				},
				{
				_id: 4,
				creatorId: 1,
				recipientId: null ,
				category: "Accessories",
				description: "unopened five pack of socks",
				zipcode: 10017,
				imgurl: "",
				timestamp: 3
				},
				{
				_id: 5,
				creatorId: 1,
				recipientId: null ,
				category: "Outdoor",
				description: "10 foot hose",
				zipcode: 10017,
				imgurl: "",
				timestamp: 3
				}
			
	]
	//TO DO: set state that will hold all data that matches search
	const [searchResults, setSearchResults] = useState([])

	//write a function that will set state accoring to form submission
	const searchItems = (e) => {
		e.preventDefault()
		console.log('search: ', e.target.search.value)
		let srch = e.target.search.value
		console.log('zipcode: ', e.target.zipcode.value)
		let zip = e.target.zipcode.value

		/////the Below code is copy pasted from Fruit Filter, to refactor with our app

		//set up a filter that removes fruits that don't match the value in the input
		//referring to each fruit as f
		const filteredListings = allItems.filter((l) => {
			return l.description.toLowerCase().includes(srch.toLowerCase()) && l.zipcode.toString().includes(zip.toString())
		})
		//then we will set state with the new array of fruits 
		console.log('search results: ', filteredListings)
		setSearchResults(filteredListings)
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
		<ListingIndex listings={searchResults}/>
        </>
    )
}

export default Home 