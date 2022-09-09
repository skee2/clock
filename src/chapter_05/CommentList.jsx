import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment: "안녕하세요 소플입니다.",
  },
  {
    name: "유재석",
    comment: "댓글인데용 호호"
  },
  {
    name: "강민경",
    comment: "리액트 댓글 만들기 성공!"
  },
]
function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;