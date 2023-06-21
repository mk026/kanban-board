import { FC, useEffect } from "react";

import { useStore } from "../../hooks/useStore";
import BoardsListControls from "../../components/boards/boards-list-controls";
import BoardsList from "../../components/boards/boards-list";
import AddBoardForm from "../../components/forms/add-board-form";
import PageTitle from "../../components/page-title";

const BoardsPage: FC = () => {
  const { boardStore } = useStore();

  useEffect(() => {
    boardStore.fetchBoards();
  }, [boardStore]);

  return (
    <>
      <PageTitle>BoardsPage</PageTitle>
      <BoardsListControls />
      <AddBoardForm />
      <BoardsList boards={boardStore.boards} />
    </>
  );
};

export default BoardsPage;
