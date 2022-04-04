import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div>
      <div className="question-container">
        <div>
          <h1>What is Context Api?</h1>
          <p>
            <span>Ans: </span> Context provides a way to share values like these
            between components without having to explicitly pass a prop through
            every level of the tree. It gives our components the ability to
            communicate and share data at different levels. Context is designed
            to share data that can be considered “global” for a tree of React
            components, such as the current authenticated user, theme, or
            preferred language. Using context, we can avoid passing props
            through intermediate elements. Context is primarily used when some
            data needs to be accessible by many components at different nesting
            levels.
          </p>
        </div>
        <div>
          <h1>What is Semantic tag?</h1>
          <p>
            <span>Ans: </span> The semantics tags provide meaning to an HTML
            page rather than just presentation. It makes HTML more
            comprehensible by better defining the different sections and layout
            of web pages. The pages made with semantic elements are much easier
            to read. It has greater accessibility. It offers a better user
            experience. The semantic HTML tags help the search engines and other
            user devices to determine the importance and context of web pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
