import React from 'react'
import List from './orderedList'

// the 'currently reading' section on the home page
class CurrentlyReading extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* Will get the book objects that have a 'currentlyReading' shelf property */}

            {this.props.booksWithCategory && this.props.booksWithCategory.filter(book_object => book_object.shelf === "currentlyReading").map((book_object) => (
              <List 
        
              book={book_object} changeCategory={this.props.changeCategory} key={book_object.id} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default CurrentlyReading

