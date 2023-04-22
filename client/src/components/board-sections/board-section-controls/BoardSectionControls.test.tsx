import { render, screen } from "@testing-library/react";

import BoardSectionControls from ".";

it("Should render BoardSectionControls", () => {
  const addTaskButtonText = "Add Task";
  const editSectionButtonText = "Edit";
  const deleteSectionButtonText = "Delete";

  render(
    <BoardSectionControls
      onAddTask={() => {}}
      onEditSection={() => {}}
      onDeleteSection={() => {}}
    />
  );

  const addTaskButton = screen.getByText(addTaskButtonText);
  const editSectionButton = screen.getByText(editSectionButtonText);
  const deleteSectionButton = screen.getByText(deleteSectionButtonText);

  expect(addTaskButton).toBeInTheDocument();
  expect(editSectionButton).toBeInTheDocument();
  expect(deleteSectionButton).toBeInTheDocument();
});
