import React, { useState } from "react";
import { Card, CardImg, CardTitle, CardText, CardBody, Row, Col, Button, CardFooter} from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";

function RenderSearchList({searchresults}) {
   
    return (
       
            <div className ="row ">
               
                <div className = "col ">
                        <Card>
                            <Link to={`/searchresult${searchresults.property_id}`} >
                                <CardImg  height="400" src={searchresults.primary_photo.href}/>
                                <CardBody className="cardinfo" >
                                    <CardTitle> $ {searchresults.list_price}</CardTitle> 
                                    <CardText>
                                        <div className = "row">
                                            <div className="col col-md-3 m-1" >
                                                {searchresults.description.beds} beds
                                            </div>
                                            <div className="col col-md-3 m-1" >
                                                {searchresults.description.baths} baths
                                            </div>
                                            <div className="col col-md-4 m-1" >
                                                {searchresults.description.sqft} Sq.Ft.
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className = "col">
   
                                                {`${searchresults.location.address.line}, ${searchresults.location.address.city}, ${searchresults.location.address.state}`}
                                            </div>
                                        </div>
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <big className="text-muted">Listing provided by {searchresults.source.type}</big>
                                </CardFooter>
                            </Link>
                        </Card>
                 
                </div>
            </div>
        
    )
}


   

function SearchList (props) {
    
    const [pageNumber, setPageNumber] = useState(0);
  
    const usersPerPage = 12;
    const pagesVisited = pageNumber * usersPerPage;
  
  
  
    const pageCount = Math.ceil(props.searchresults.length / usersPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
   
    const searchlist = props.searchresults
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter(searchhouse => searchhouse.primary_photo !== null)  // filter out the ones without primary_photo, otherwise app will crash
    .map(searchhouse => {
        
        return (
            <div key = {searchhouse.property_id} className = "col-md-4 m-3 mx-auto">
                <RenderSearchList searchresults={searchhouse} />
               
            </div>
        )
    })

        return (
            <div className="container-fluid">
                <div className="row">
                    <Row>
                    <Col className="mx-3">
                    <Link to="/home"><Button color="outline-light" style={{fontSize:'3vh'}}> Home</Button></Link>
                    </Col>
                    </Row>
                </div>
                <br/> 
                <div className="row">
                     {searchlist}
                     <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    // previousLinkClassName={"previousBttn"}
                    // nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
                </div>
            </div>
         )
    }


export default SearchList;



 