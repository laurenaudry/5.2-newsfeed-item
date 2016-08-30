import React from 'react'

export default React.createClass({


  render() {
    return (
      <section className = "article-container">
        <img className="profileImg" src="http://e2f4f06bf33f9cbf3b93-8454faaab9dd2d91c89033854d195de1.r85.cf5.rackcdn.com/fb-zap.png"
        alt="lightning bolt logo"/>
        <h1 className="author">
          Instant Articles
        </h1>
        <article className="article">
        Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android.
          Learn more about this new tool for publishers at instantarticles.fb.com.
        </article>
      </section>
    )
  }
});
