import React, {Component} from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    Link,
    // Redirect,
    // Switch
} from 'react-router-dom';
import './booklist.css';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    "id": "C001",
                    "name": "Silas Marner",
                    "author": "George Eliot",
                    "description": "The Weaver of Raveloe is the third novel by George Eliot, published in 1861. " +
                        "An outwardly simple tale of a linen weaver, it is notable for its strong realism and its " +
                        "sophisticated treatment of a variety of issues ranging from religion to industrialisation to" +
                        "community."
                },
                {
                    "id": "C002",
                    "name": "Invisible Man",
                    "author": "H.G. Wells",
                    "description": "The narrator of Invisible Man is a nameless young black man who moves in a " +
                        "20th-century United States where reality is surreal and who can survive only through pretense. " +
                        "Because the people he encounters see only my surroundings, themselves, or figments of their " +
                        "imagination, he is effectively invisible."
                },
                {
                    "id": "C003",
                    "name": "Pride and Prejudice",
                    "author": "Jane Austen",
                    "description": "Pride and Prejudice is a humorous story of love and life among English gentility " +
                        "during the Georgian era. Mr Bennet is an English gentleman living in Hartfordshire with his " +
                        "overbearing wife. The Bennets 5 daughters; the beautiful Jane, the clever Elizabeth, the " +
                        "bookish Mary, the immature Kitty and the wild Lydia."
                }
            ]
        }
    }

    render() {
        const {books} = this.state;
        return (
            <div className="book-div">

                <ul className="book-list">
                    <h1 className="title">Book List</h1>
                    {books.map(booklist =>
                        <Link className="book-link" to={
                            {
                                pathname: "/bookdetails",
                                books: booklist
                            }
                        }
                              key={booklist.id}>
                            {booklist.name} by {booklist.author}
                        </Link>)}
                </ul>
            </div>
        );
    }
}

export default BookList;
