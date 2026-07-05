import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  const comment =   {
    id: 1,
    user: {
      id: 101,
      username: "john_doe",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    comment: "React recursion makes rendering nested comments so much easier.",
    upvotes: 145,
    createdAt: "2026-07-03T10:30:00Z",
    replies: [
      {
        id: 2,
        user: {
          id: 102,
          username: "alice",
          avatar: "https://i.pravatar.cc/150?img=2"
        },
        comment: "Absolutely! Once you understand recursion, trees become easy.",
        upvotes: 67,
        createdAt: "2026-07-03T10:35:00Z",
        replies: [
          {
            id: 3,
            user: {
              id: 103,
              username: "bob",
              avatar: "https://i.pravatar.cc/150?img=3"
            },
            comment: "I struggled more with passing props than recursion itself.",
            upvotes: 24,
            createdAt: "2026-07-03T10:40:00Z",
            replies: [
              {
                id: 4,
                user: {
                  id: 104,
                  username: "charlie",
                  avatar: "https://i.pravatar.cc/150?img=4"
                },
                comment: "Try separating the Comment component from CommentList.",
                upvotes: 18,
                createdAt: "2026-07-03T10:45:00Z",
                replies: [
                  {
                    id: 5,
                    user: {
                      id: 105,
                      username: "david",
                      avatar: "https://i.pravatar.cc/150?img=5"
                    },
                    comment: "That solved my issue too!",
                    upvotes: 9,
                    createdAt: "2026-07-03T10:48:00Z",
                    replies: []
                  }
                ]
              }
            ]
          },
          {
            id: 6,
            user: {
              id: 106,
              username: "eva",
              avatar: "https://i.pravatar.cc/150?img=6"
            },
            comment: "Recursion looked scary until I built a comment section.",
            upvotes: 31,
            createdAt: "2026-07-03T10:50:00Z",
            replies: []
          }
        ]
      },
      {
        id: 7,
        user: {
          id: 107,
          username: "frank",
          avatar: "https://i.pravatar.cc/150?img=7"
        },
        comment: "Can recursion cause performance issues?",
        upvotes: 42,
        createdAt: "2026-07-03T11:00:00Z",
        replies: [
          {
            id: 8,
            user: {
              id: 108,
              username: "grace",
              avatar: "https://i.pravatar.cc/150?img=8"
            },
            comment: "Only if the nesting becomes extremely deep.",
            upvotes: 38,
            createdAt: "2026-07-03T11:02:00Z",
            replies: []
          },
          {
            id: 9,
            user: {
              id: 109,
              username: "henry",
              avatar: "https://i.pravatar.cc/150?img=9"
            },
            comment: "Virtualization helps when rendering thousands of comments.",
            upvotes: 21,
            createdAt: "2026-07-03T11:04:00Z",
            replies: []
          }
        ]
      }
    ]
  };
  return (
    <div className='flex flex-col gap-2 rounded-md'>
      
     {
      comments.map((comment) =>
      (<>
   
         <Comment comment={comment.snippet}/>
         { comment['replies'] && (
          
         <div className='ml-5 border p-2 border-l-black'>
          {console.log("Replies: "+comment.replies.comments)}
          <CommentList comments = {comment.replies.comments}/>
         </div>)
}
            </>
      )
    
    )
     }
    </div>
  )
}

export default CommentList