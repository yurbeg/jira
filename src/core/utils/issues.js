import {
  BugOutlined,
  FlagOutlined,
  CheckSquareOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

const ISSUE_TYPES = {
  BUG: "bug",
  TASK: "task",
  STORY: "story",
};

const ISSUE_PRIORITY = {
  HIGHEST: "highest",
  HIGH: "high",
  LOWEST: "lowest",
  LOW: "low",
  MEDIUM: "medium",
};

// export const TASK_STATUS_TYPE ={
//   TODO:0,
//   IN_PROGRESS:1,
//   TEST:2,
//   DONE:3
// }
export const taskStatuses = {
  TODO: {
    key: "TODO",
    title: "Todo",
  },
  IN_PROGRESS: {
    key: "IN_PROGRESS",
    title: "In Progress",
  },
  TEST: {
    key: "TEST",
    title: "Test",
  },
  DONE: {
    key: "DONE",
    title: "Done",
  },
};

export const COLOR_TYPES = {
  RED: "#e44d42",
  ORANGE: "#e97f33",
  GREEN: "#65ba43",
  BLUE: "#4fade6",
};

export const ISSUE_OPTIONS = {
  [ISSUE_TYPES.BUG]: {
    label: "Bug",
    value: ISSUE_TYPES.BUG,
    icon: <BugOutlined style={{ color: COLOR_TYPES.RED }} />,
  },
  [ISSUE_TYPES.TASK]: {
    label: "Task",
    value: ISSUE_TYPES.TASK,
    icon: <CheckSquareOutlined style={{ color: COLOR_TYPES.BLUE }} />,
  },
  [ISSUE_TYPES.STORY]: {
    label: "Story",
    value: ISSUE_TYPES.STORY,
    icon: <FlagOutlined style={{ color: COLOR_TYPES.GREEN }} />,
  },
};

export const ISSUE_PRIORITY_OPTIONS = {
  [ISSUE_PRIORITY.HIGHEST]: {
    label: "Highest",
    value: ISSUE_PRIORITY.HIGHEST,
    icon: <ArrowUpOutlined style={{ color: COLOR_TYPES.RED }} />,
  },
  [ISSUE_PRIORITY.HIGH]: {
    label: "High",
    value: ISSUE_PRIORITY.HIGH,
    icon: <ArrowUpOutlined style={{ color: COLOR_TYPES.RED }} />,
  },
  [ISSUE_PRIORITY.LOWEST]: {
    label: "Lowest",
    value: ISSUE_PRIORITY.LOWEST,
    icon: <ArrowDownOutlined style={{ color: COLOR_TYPES.GREEN }} />,
  },
  [ISSUE_PRIORITY.LOW]: {
    label: "Low",
    value: ISSUE_PRIORITY.LOW,
    icon: <ArrowDownOutlined style={{ color: COLOR_TYPES.GREEN }} />,
  },
  [ISSUE_PRIORITY.MEDIUM]: {
    label: "Medium",
    value: ISSUE_PRIORITY.MEDIUM,
    icon: <ArrowUpOutlined style={{ color: COLOR_TYPES.ORANGE }} />,
  },
};
