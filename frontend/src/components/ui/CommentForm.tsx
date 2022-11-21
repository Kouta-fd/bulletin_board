import type { FC } from "react";
type TCommetForm = {
  value: string;
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};
export const CommentForm: FC<TCommetForm> = (props) => {
  return (
    <div>
      <input onChange={props.changeValue} value={props.value} type="text" />
      <button onClick={props.handleClick}>投稿</button>
    </div>
  );
};
