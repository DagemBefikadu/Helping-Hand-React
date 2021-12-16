import React, { useState, useEffect } from 'react'
import ListingIndex from './ListingIndex'
import AllListing from './AllListing'
import Form from './Form'

function Home (props) {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	
	//TO DO: set state that will hold all data that matches search
	const [searchResults, setSearchResults] = useState([])

	//write a function that will set state accoring to form submission
	const searchItems = (e) => {
		e.preventDefault()
		console.log('search: ', e.target.search.value)
		let srch = e.target.search.value
		console.log('zipcode: ', e.target.zipcode.value)
		let zip = e.target.zipcode.value

		//filter listings based on search params
		const filteredListings = props.allItems.items.filter((l) => {
			return (
				( 
					l.description.toLowerCase().includes(srch.toLowerCase()) 
					|| l.name.toLowerCase().includes(srch.toLowerCase()) 
					|| l.category.toLowerCase().includes(srch.toLowerCase())
				) && l.zipcode.toString().includes(zip.toString())
			)
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
		{/* <ListingIndex listings={searchResults}/> */}
		<AllListing allItems={searchResults} />
		
        </>
    )
}

export default Home 