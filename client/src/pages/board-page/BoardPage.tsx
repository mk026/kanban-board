import { FC } from "react";
import { useParams } from "react-router-dom";

export type BoardPageParams = "id";

const BoardPage: FC = () => {
  const params = useParams<BoardPageParams>();

  return <div>BoardPage for board {params.id}</div>;
};

export default BoardPage;
