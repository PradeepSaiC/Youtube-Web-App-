export const comments = [
  {
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
  },

  {
    id: 10,
    user: {
      id: 110,
      username: "isabella",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    comment: "I prefer using recursion over nested loops.",
    upvotes: 88,
    createdAt: "2026-07-03T11:20:00Z",
    replies: [
      {
        id: 11,
        user: {
          id: 111,
          username: "jack",
          avatar: "https://i.pravatar.cc/150?img=11"
        },
        comment: "Nested loops aren't possible when depth is unknown.",
        upvotes: 35,
        createdAt: "2026-07-03T11:25:00Z",
        replies: [
          {
            id: 12,
            user: {
              id: 112,
              username: "karen",
              avatar: "https://i.pravatar.cc/150?img=12"
            },
            comment: "Exactly. Trees are naturally recursive.",
            upvotes: 20,
            createdAt: "2026-07-03T11:30:00Z",
            replies: []
          }
        ]
      }
    ]
  },

  {
    id: 13,
    user: {
      id: 113,
      username: "deleted",
      avatar: null
    },
    comment: "[deleted]",
    upvotes: 0,
    createdAt: "2026-07-03T11:45:00Z",
    deleted: true,
    replies: [
      {
        id: 14,
        user: {
          id: 114,
          username: "lucy",
          avatar: "https://i.pravatar.cc/150?img=13"
        },
        comment: "Looks like the original comment was removed.",
        upvotes: 15,
        createdAt: "2026-07-03T11:47:00Z",
        replies: []
      }
    ]
  }
];

export const entriesList = [
    { name: "Alice", message: "Hello! Hope you are having a wonderful day." },
    { name: "Bob", message: "Don't forget to take a break and drink some water!" },
    { name: "Charlie", message: "Coding is like magic, but with bugs." },
    { name: "Diana", message: "Success is the sum of small efforts repeated daily." },
    { name: "Ethan", message: "Keep pushing forward, you are doing great." },
    { name: "Fiona", message: "A room without books is like a body without a soul." },
    { name: "George", message: "Simplicity is the ultimate sophistication." },
    { name: "Hannah", message: "Believe you can and you're halfway there." },
    { name: "Ian", message: "The only way to do great work is to love what you do." },
    { name: "Julia", message: "Make today worth remembering!" }
];

