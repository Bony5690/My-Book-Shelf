import React from 'react'
import List from './orderedList'

class WantToRead extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid"> 

            {/* Use only the book objects with the shelf property 'wantToRead' */}
            {this.props.booksWithCategory && this.props.booksWithCategory.filter( book_object => book_object.shelf === "wantToRead").map((book_object) => (

            <List 
 
            book={book_object} changeCategory={this.props.changeCategory} key={book_object.id} />

            ))}

          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
