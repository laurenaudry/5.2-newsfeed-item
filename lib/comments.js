import React from 'react'

export default React.createClass({
  render() {
    return (
      <section className="comments">
        <img className="comment-profile" src={this.props.imgSrc} alt="commenters picture"/>
        <div className="commentersdiv">
          <h3 className="comment-author">{ this.props.username}</h3>
          <p className="commentersComment">{ this.props.text}</p>
          <time className="comment-time">{ this.props.time}</time>
        </div>
      </section>
    )
  }
})
