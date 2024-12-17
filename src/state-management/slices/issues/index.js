import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../services/firebase";
import { getDocs, collection } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../../core/utils/constants";
import { transformIssueData } from "../../../core/helpers/transformIssueData";
const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

export const fetchIssueData = createAsyncThunk("data/fetchData", async () => {
  const querryData = await getDocs(collection(db, FIRESTORE_PATH_NAMES.ISSUES));
  const result = querryData.docs.map((doc) => {
    return doc.data();
  });

  return transformIssueData(result);
});

const issueSlice = createSlice({
  name: "ISSUES",
  initialState,
  reducers: {
    changeIssueColumns: (state, action) => {
      const columns = state.data;
      const { destination, source } = action.payload;
      const sourceColumnItems = [...columns[source.droppableId]];
      const destinationColumn = [...columns[destination.droppableId]];
        
      const [removeItem] =  sourceColumnItems.splice(source.index,1)
      destinationColumn.splice(destination.index,0,removeItem)
      
      let changedColumns = {}
        if(source.droppableId !== destination.droppableId){
            changedColumns={
                ...columns,
                [source.droppableId]:sourceColumnItems,
                [destination.droppableId]:destinationColumn
            }
        }
        else {
            sourceColumnItems.splice(destination.index,0,removeItem)
            changedColumns = {
                ...columns,
                [source.droppableId]:sourceColumnItems
            }
        }   
        state.data = changedColumns
    },
  },
  extraReducers: (promise) => {
    promise
      .addCase(fetchIssueData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIssueData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchIssueData.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.error = action.payload;
      });
  },
});
export const { changeIssueColumns } = issueSlice.actions;
export default issueSlice.reducer;
