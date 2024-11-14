import {
  BugOutlined,
  FlagOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
const ISSUE_TYPES = {
    BUG:"bug",
    TASK:"task",
    STROY:"story"
}
const ISSUE_PRIORITY = {
    HIGHEST:"highest",
    HIGH:"high",
    LOW:"low",
    LOWEST:"lowest",
    MEDIUM:"medium"
}
export const  ISSUE_OPTIONS = {
    [ISSUE_TYPES.BUG]:{
        label:"Bug",
        value:ISSUE_TYPES.BUG,
        icon:<BugOutlined style={{color:"#e44d42"}}/>
    },
    [ISSUE_TYPES.TASK]:{
        label:"Task",
        value:ISSUE_TYPES.TASK,
        icon:<CheckSquareOutlined style={{color:"#4fade6"}}/>
    }, [ISSUE_TYPES.STROY]:{
        label:"Story",
        value:ISSUE_TYPES.STROY,
        icon:<FlagOutlined style={{color:"#65ba43"}}/>
    }
}
export const ISSUE_PRIORITY_OPTIONS = {
    [ISSUE_PRIORITY.HIGHEST]:{
        label:"Highest",
        value:ISSUE_PRIORITY.HIGHEST,
    },
    [ISSUE_PRIORITY.HIGH]:{
        label:"Highe",
        value:ISSUE_PRIORITY.HIGH
    },
    [ISSUE_PRIORITY.LOW]:{
        label:"Low",
        value:ISSUE_PRIORITY.LOW
        
    },
    [ISSUE_PRIORITY.LOWEST]:{
        label:"Lowest",
        value:ISSUE_PRIORITY.LOWEST
        
    },
    [ISSUE_PRIORITY.MEDIUM]:{
        label:"Medium",
        value:ISSUE_PRIORITY.MEDIUM
    },
}
