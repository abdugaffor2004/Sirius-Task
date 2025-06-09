import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ImageUploadingPage } from './pages/ImageUploadingPage';
import { QuestionnareFormPage } from './pages/QuestionnareFormPage';

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ImageUploadingPage />} />
      <Route path="/questionnareForm" element={<QuestionnareFormPage />} />
    </Routes>
  </BrowserRouter>
);
