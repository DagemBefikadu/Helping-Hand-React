import React, { useState, useEffect } from "react";
import ListingIndex from "./ListingIndex";
import AllListing from "./AllListing";
import { Form, Button, Row, Col, Container } from "react-bootstrap/";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'

function Home(props) {
	const buttonStyle = {
		border: '#BCCCE0',
		color: 'white',
		backgroundColor: '#574B60'
	}
	const backgroundTextColor = {
		border: '#BCCCE0',
		color: '#3F334D',
	}
  // const { msgAlert, user } = props
  console.log("props in home", props);

  //TO DO: set state that will hold all data that matches search
  const [searchResults, setSearchResults] = useState([]);

  //write a function that will set state accoring to form submission
  const searchItems = (e) => {
    e.preventDefault();
    console.log("search: ", e.target.search.value);
    let srch = e.target.search.value;
    console.log("zipcode: ", e.target.zipcode.value);
    let zip = e.target.zipcode.value;

    //filter listings based on search params
    const filteredListings = props.allItems.items.filter((l) => {
      return (
        (l.description.toLowerCase().includes(srch.toLowerCase()) ||
          l.name.toLowerCase().includes(srch.toLowerCase()) ||
          l.category.toLowerCase().includes(srch.toLowerCase())) &&
        l.zipcode.toString().includes(zip.toString())
      );
    });
    //then we will set state with the new array of fruits
    console.log("search results: ", filteredListings);
    setSearchResults(filteredListings);
    /////////////////////////////////
  };

  return (
    <>
      <Container  className="mt-5 mb-5" fluid style={backgroundTextColor}>
        <Form onSubmit={searchItems}>
          <h3>Find what you need...</h3>
          <Row>
            <Col m={6}>
              <Form.Group className="mb-2">
                <Form.Control className="mb-1"
                  type="text"
                  name="search"
                  placeholder="Ex: shirt, socks, jeans..."
                  id="search"
				  />
				  <Form.Label htmlFor="search">Search</Form.Label>
              </Form.Group>
            </Col>
            <Col m={6} lg={4}>
              <Form.Group className="mb-2">
                <Form.Control className="mb-1" type="number" name="zipcode" id="zipcode" />
                <Form.Label>Zipcode</Form.Label>
              </Form.Group>
            </Col>
            <Col m={6} lg={2}>
              {/* <Form.Group>
                <Form.Control type="submit" value="Search" size="" /> */}
                <Button style={buttonStyle} type="submit">
                Search <FontAwesomeIcon icon={faSearch} />
              </Button>
              {/* </Form.Group> */}
            </Col>
          </Row>
        </Form>
        {/* <ListingIndex listings={searchResults}/> */}
        <AllListing allItems={searchResults} />
      </Container>
    </>
  );
}

export default Home;
