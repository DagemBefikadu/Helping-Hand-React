import {Row, Col} from 'react-bootstrap'
import ItemList from './ItemList'

export default function AllListing(props) {
  return (
    <div>
      <h1 className='mt-3'>Explore</h1>
        <div>
            <Row>
              {props.allItems.map((l) => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3}>
                    <ItemList listItem={l} />
                  </Col>
                )
              })}
            </Row>
          </div>
    </div>
  )
}
