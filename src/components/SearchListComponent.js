import React, { useState } from "react";
import { Card, CardImg, CardTitle, CardText, CardBody, Row, Col, Button, CardFooter} from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";
 
function RenderSearchList({searchresults}) {

   const [favorite, setFavorite] = useState('false');

   function markFavorite () {
       setFavorite(favorite=>!favorite)
   }

    return (
       
            <div className ="row ">
                <div className = "col ">
                        <Card>
                            <Link to={`/searchresult${searchresults.property_id}`} >
                                <CardImg  height="400" src={searchresults.primary_photo.href} />
                            </Link>
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
                                            <div className="col col-md-3 m-1" >
                                                {searchresults.description.sqft} Sq.Ft.
                                            </div>
                                            <div className = "col ">
                                                <button className = "iconbutton" onClick =  {markFavorite} >
                                                {favorite ? <i class="fa fa-regular fa-heart-o fa-2x icon"  ></i>: <i class="fa fa-regular fa-heart fa-2x icon"  ></i>}
                                                </button>
                                              
                                             </div>
                                        </div>
                                        <div className = "row">
                                            <div className = "col col-md-10">
   
                                                {`${searchresults.location.address.line}, ${searchresults.location.address.city}, ${searchresults.location.address.state}`}
                                            </div>
                                            
                                        </div>

                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <big className="text-muted">Listing provided by {searchresults.source.type}</big>
                                </CardFooter>
                        </Card>
                </div>
         </div>
    )
}

const FavoriteId = (props) => {
    if (props.favorite) {
        return (
        FavoriteId.push(props.searchresults.property_id))
    }
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
                <RenderSearchList searchresults={searchhouse} 
               />
               
            </div>
        )
    })

    if (props.isloading) {
        return (
        <div className="row justify-content-center">
             <h1> Loading ... </h1>
        </div>)
    }
        return (
             <div className="container-fluid">
                <div className="row">
               
                    <Col className="col-md-10 ml-3">
                    <Link to="/home"><Button color="outline-light" style={{fontSize:'3vh'}}> Home</Button></Link>
                    </Col>
                    <Col className="col-md-1">
                    <Link to={`/favoritelist`} >
                    <Button outline size="lg" color="danger" style={{fontSize:'3vh'}} >
                        Favorites
                    </Button>
                    </Link>
                    </Col>
             
                </div>
                <br/><br/>
                <div className="row justify-content-center">
                    <h1> Houses Found in {props.city}, {props.state}</h1>
                </div>
                <br/> <br/>
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


export {SearchList, FavoriteId};


