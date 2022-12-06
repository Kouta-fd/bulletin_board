import type { FC } from "react";
type TCommetnList = {
  comments: {
    name: string;
    content: string;
    updatedAt: string;
  }[];
};
export const CommentList: FC<TCommetnList> = (props) => {
  return (
    <div>
      {props.comments.map((commentItem) => (
        <li
          key={commentItem.updatedAt}
          style={{ listStyle: "none", marginTop: 30 + "px" }}
        >
          <div>投稿者</div>
          <div>{commentItem.name}</div>
          <div>投稿内容</div>
          <div>{commentItem.content}</div>
          <div style={{ fontSize: 0.7 + "rem" }}>
            （{commentItem.updatedAt}）
          </div>
        </li>
      ))}
    </div>
  );
};
