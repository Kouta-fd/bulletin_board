import type { FC } from "react";
import { useState } from "react";
import { CommentForm } from "../ui/CommentForm";
import { CommentList } from "../ui/CommentList";
type TComments = {
  name: string;
  content: string;
  updatedAt: string;
}[];
export const BulletinBord: FC = () => {
  const [comments, setComments] = useState<TComments>([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const handleClick = () => {
    let date = new Date().toLocaleString();
    const newComment = {
      name: name,
      content: comment,
      updatedAt: date,
    };
    const newComments = [...comments, newComment];
    setComments(newComments);
    setComment("");
    setName("");
  };
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(() => e.target.value);
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => e.target.value);
  };
  return (
    <div style={{ width: 80 + "%", margin: "auto" }}>
      <h1>掲示板</h1>
      <CommentForm
        changeValue={changeValue}
        handleClick={handleClick}
        value={comment}
        name={name}
        changeName={changeName}
      />
      <CommentList comments={comments} />
    </div>
  );
};
