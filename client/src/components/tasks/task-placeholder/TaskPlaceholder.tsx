import { FC } from "react";
import { Box, Collapse } from "@mui/material";

interface TaskPlaceholderProps {
  open: boolean;
}

const TaskPlaceholder: FC<TaskPlaceholderProps> = ({ open }) => {
  return (
    <Collapse in={open}>
      <Box sx={{ height: "150px", backgroundColor: "#6c6c6c" }} />
    </Collapse>
  );
};

export default TaskPlaceholder;
