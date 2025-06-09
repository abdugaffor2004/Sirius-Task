import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ImageUploadingPage } from './pages/ImageUploadingPage';

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ImageUploadingPage />} />
      <Route path="/questionnare" />
    </Routes>
  </BrowserRouter>
);
