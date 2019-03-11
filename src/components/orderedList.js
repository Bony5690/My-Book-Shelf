import React from 'react'

// renders each book object
const List = (props) => (
  <li>
    <div className="book">
      <div className="book-top">

        {/* if the book object has an image or not */}
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.book.imageLinks ? 'url(' + props.book.imageLinks.smallThumbnail + ')' : 'none' }}></div>

        <div className="book-shelf-changer">
          <select onChange={(e) => props.changeCategory(props.book, e)} value={props.book.shelf} >
            {/* <option value="move" disabled>Move to...</option> */}
            <option value="none" >None</option>
            <option value="currentlyReading" >Currently Reading</option>
            <option value="wantToRead" >Want to Read</option>
            <option value="read" >Read</option>

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

