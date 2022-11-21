import type { FC } from "react";
type TCommetnList = {
  comments: {
    content: string;
    updatedAt: string;
  }[];
};
export const CommentList: FC<TCommetnList> = (props) => {
  return (
    <div>
      {props.comments.map((commentItem) => (
        <li key={commentItem.updatedAt}>
          <span>{commentItem.content}</span>
          <span>（{commentItem.updatedAt}）</span>
        </li>
      ))}
    </div>
  );
};
