import React from 'react'
import Comments from './comments'

export default React.createClass({
  getInitialState() {
      return {
        comments: [
          {
            id: 1,
            username: "Inigo Montoya",
            profile:"http://cdn.funcheap.com/wp-content/uploads/2013/04/princess-bride_2460761b1.jpg",
            text: "My name is Inigo Montoya, you killed my father, prepare to die",
            time: "3/3/2016"
          },
          {
            id: 2,
            username: "Vizzini",
            profile:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQp-PugTtyTZezr859ljMnfBTb-NN251q4YafN-XIOr-FGg4dsk8qAELA",
            text: "Inconceivable!!!",
            time: "4/20/2015"
          },
          {
            id: 3,
            username: "Sterling Mallory Archer",
            profile:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTIe4hs397oIU_5tbQeEYPXziztqNWfOxTw0cWx0KElYa3r5Xa",
            text: "Do you want ants? Because thats how you get ants!",
            time: "Yesterday somehow"
          }
        ]
      }
    },

  render() {
    return (
     <div className="post">
      <section className = "article-container">
        <img className="profileImg" src="http://e2f4f06bf33f9cbf3b93-8454faaab9dd2d91c89033854d195de1.r85.cf5.rackcdn.com/fb-zap.png"
        alt="lightning bolt logo"/>
        <h1 className="author">
          Instant Articles
        </h1>
        <h3>
          March 15, 2013
        </h3>
        <article className="article">
        Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android.
        <p>
        Learn more about this new tool for publishers at instantarticles.fb.com.
        </p>
        </article>
      </section>
      {
        this.state.comments.map((comment) => {
          return <Comments key={comment.id} id={comment.id} username={comment.username} imgsrc={comment.profile} text={comment.text} time={comment.time}/>
          })
      }
      </div>
    )
  }
});
