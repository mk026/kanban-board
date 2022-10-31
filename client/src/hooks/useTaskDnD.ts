import { useCallback, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

import { BoardSection } from "../store/board-section/BoardSection";
import { Task } from "../store/task/Task";

export interface DropResult {
  target: Task | BoardSection;
  droppedOnTop: boolean;
}

export const TASK_TYPE = "task";

export const useTaskDnD = (task: Task) => {
  const [isHoveringOnTop, setIsHoveringOnTop] = useState(false);
  const taskRef = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag<
    Task,
    DropResult,
    { isDragging: boolean }
  >(() => ({
    type: TASK_TYPE,
    item: task,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const dropResult = monitor.getDropResult()!;
        task.move(dropResult.target as Task, !dropResult.droppedOnTop);
      }
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));
  const [{ isOver }, drop] = useDrop<Task, DropResult, { isOver: boolean }>(
    () => ({
      accept: TASK_TYPE,
      drop: () => ({ target: task, droppedOnTop: isHoveringOnTop }),
      collect: (monitor) => ({ isOver: monitor.isOver() }),
      hover: (item, monitor) => {
        const hoverBoundingRect = taskRef.current!.getBoundingClientRect();
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
        if (hoverClientY < hoverMiddleY) {
          setIsHoveringOnTop(true);
        }
        if (hoverClientY > hoverMiddleY) {
          setIsHoveringOnTop(false);
        }
      },
    }),
    [isHoveringOnTop]
  );

  const dndRef = useCallback(
    (node: HTMLDivElement) => drag(drop(node)),
    [drag, drop]
  );

  return { dndRef, taskRef, isDragging, isOver, isHoveringOnTop };
};
