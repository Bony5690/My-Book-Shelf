import React from 'react'

// renders each book object
const List = (props) => (
  <li>
    <div className="book">
      <div className="book-top">

        {/* if the book object has an image or not */}
        {props.book.imageLinks ?
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + props.book.imageLinks.smallThumbnail + ')' }}></div>
          :
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'none' }}></div>
        }

        <div className="book-shelf-changer">
          <select onChange={(e) => props.changeCategory(props.book, e)} value={props.book.shelf} defaultValue={"none"}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading" >Currently Reading</option>
            <option value="wantToRead" >Want to Read</option>
            <option value="read" >Read</option>
            <option value="none" >None</option>
          </select>
        </div>

      </div>

      <div className="book-title">{props.book.title}</div>

      {/* if the book object has an author or not */}
      {props.book.authors &&
        <div className="book-authors">{props.book.authors}</div>
      }

    </div>
  </li>
)

export default List

