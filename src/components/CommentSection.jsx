import React, { memo, useState } from "react";

const commentsData = [
  {
    name: "Shahil",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
    replies: [
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [
          {
            name: "Shahil",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
            replies: [],
          },
        ],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
    ],
  },
  {
    name: "Shahil",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
    replies: [
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [
          {
            name: "Shahil",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
            replies: [
              {
                name: "Shahil",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
                replies: [
                  {
                    name: "Shahil",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
                    replies: [
                      {
                        name: "Shahil",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
    ],
  },
  {
    name: "Shahil",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
    replies: [
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
    ],
  },
  {
    name: "Shahil",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
    replies: [
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
    ],
  },
  {
    name: "Shahil",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
    replies: [
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
      {
        name: "Shahil",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.",
        replies: [],
      },
    ],
  },
];
const Avatar = memo(({ src, alt }) => (
  <img
    src={src || "https://via.placeholder.com/150"}
    alt={alt || "User Avatar"}
    className="w-8 h-8 rounded-full"
  />
));

// Comment Component with Like/Dislike and Reply buttons
const Comment = ({ info, onReply }) => {
  const { name, text } = info;
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow p-3 mb-2">
      <div className="flex items-start gap-3">
        <Avatar src="https://via.placeholder.com/150" alt="user-icon" />
        <div>
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-4 text-sm">
        <button
          onClick={() => setLikes((prev) => prev + 1)}
          className="text-blue-600 hover:underline"
        >
          👍 Like ({likes})
        </button>
        <button
          onClick={() => setDislikes((prev) => prev + 1)}
          className="text-red-600 hover:underline"
        >
          👎 Dislike ({dislikes})
        </button>
        <button onClick={onReply} className="text-green-600 hover:underline">
          ↩️ Reply
        </button>
      </div>
    </div>
  );
};

// Recursive CommentList Component
const CommentList = ({ comments = [] }) => {
  const handleReply = (name) => {
    alert(`Replying to ${name}`);
    // Implement further reply logic here
  };

  return comments.map((comment, index) => (
    <div key={index} className="mb-2">
      <Comment info={comment} onReply={() => handleReply(comment.name)} />
      {comment.replies?.length > 0 && (
        <div className="pl-6 border-l-2 border-gray-300">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

// Main CommentSection Component
const CommentSection = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      {commentsData.length > 0 ? (
        <CommentList comments={commentsData} />
      ) : (
        <p className="text-gray-500">
          No comments yet. Be the first to comment!
        </p>
      )}
    </div>
  );
};

export default CommentSection;
