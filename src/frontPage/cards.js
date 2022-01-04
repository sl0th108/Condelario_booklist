import React from "react";
import './cards.css'

function Cards() {
    return (
    <div className="post">
        <div className="postInfo">
        <span className="postTitle">
            Title
        </span>
        <p>
          Author
        </p>
      </div>
      <p className="postDesc">
        Synopsis
      </p>
    </div>
    )
}

export default Cards