
import React from "react";
import './cards.css'

function Cards({allBooks}) {
    return (
      <>
      {allBooks.map((book, index) => (
        <div className="post">
        <div className="postInfo">
        <span className="postTitle">
            {book.title}
        </span>
        <p>
          {book.author}
        </p>
        </div>
          <p className="postDesc">
            {book.synopsis}
          </p>
        </div>
      ))}
      </>
    ) 
}

export default Cards