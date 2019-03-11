import React from 'react'
import List from './orderedList'



class AlreadyRead extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksWithCategory && this.props.booksWithCategory.filter(book_object => book_object.shelf === "read").map((book_object) => (

              <List 
    
              book={book_object} changeCategory={this.props.changeCategory} key={book_object.id} />


            ))}
          </ol>
        </div>
      </div>

    )
  }
}

export default AlreadyRead