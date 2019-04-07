import React, {Component} from 'react';
import "./bookdetails.css";

class BookDetails extends Component {

    render() {
        const {books} = this.props.location;
        return (
            <div className="details-page">
                <div className="details-box">
                    <h1>BOOK DETAILS</h1>
                    <h2 className="book-name">{books.name}</h2>
                    <p className="book-author">Author: {books.author}</p>
                    <p>Id: {books.id}</p>
                    <p>Description: {books.description}</p>
                </div>
            </div>
        );
    }
}

export default BookDetails;
