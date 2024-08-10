import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for fetching tasks (simulate async behavior)
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, text: 'Sample Task', done: false }]), 500)
  );
  return response;
});

const todoSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null,
    theme: 'light', // default theme
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, done: false });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addTask, deleteTask, toggleTask, toggleTheme } = todoSlice.actions;

export default todoSlice.reducer;
