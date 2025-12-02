import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Profile } from '@/pages/Profile';
import { Repository } from '@/pages/Repository';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/repo/:username/:repoName" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
};
