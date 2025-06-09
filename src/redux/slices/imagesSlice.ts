import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ImagesState {
  imagePaths: {
    firstPath: string | null;
    secondPath: string | null;
    thirdPath: string | null;
  };
  loading: boolean;
  error: string | null;
}

const initialState: ImagesState = {
  imagePaths: {
    firstPath: null,
    secondPath: null,
    thirdPath: null,
  },
  loading: false,
  error: null,
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImagesData: (state, action) => {
      state.imagePaths = { ...state.imagePaths, ...action.payload };
    },
  },

  extraReducers(builder) {
    builder
      .addCase(uploadImagesDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadImagesDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.imagePaths = { ...state.imagePaths, ...action.payload };
      })
      .addCase(uploadImagesDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Upload failed';
      });
  },
});

export const uploadImagesDataAsync = createAsyncThunk<File[], File[]>(
  'images/uploadImagesDataAsync',
  async (imagesData) => {
    const formData = new FormData();
    imagesData.forEach((image) => formData.append('files', image));

    const response = await fetch(
      'https://sirius-draw-test-94500a1b4a2f.herokuapp.com/upload',
      { method: 'POST', body: formData }
    );

    return await response.json();
  }
);

export const { setImagesData } = imagesSlice.actions;

export default imagesSlice.reducer;
