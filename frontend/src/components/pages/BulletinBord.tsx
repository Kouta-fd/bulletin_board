import type { FC } from "react";
import { useState } from "react";
import { CommentForm } from "../ui/CommentForm";
import { CommentList } from "../ui/CommentList";
type TComments = {
  content: string;
  updatedAt: string;
}[];
export const BulletinBord: FC = () => {
  const [comments, setComments] = useState<TComments>([]);
  const [comment, setComment] = useState("");
  const handleClick = () => {
    let date = new Date().toLocaleString();
    const newComment = {
      content: comment,
      updatedAt: date,
    };
    const newComments = [...comments, newComment];
    setComments(newComments);
    setComment("");
  };
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(() => e.target.value);
  };
  return (
    <div>
      <h1>掲示板</h1>
      <CommentForm
        changeValue={changeValue}
        handleClick={handleClick}
        value={comment}
      />
      <CommentList comments={comments} />
    </div>
  );
};
