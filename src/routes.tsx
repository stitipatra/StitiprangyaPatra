import { Route, Routes } from "react-router";

import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import JourneyPage from "./pages/JourneyPage";
import LifePage from "./pages/LifePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route
        path="/projects/:projectSlug"
        element={<ProjectDetailPage />}
      />
      <Route path="/journey" element={<JourneyPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/life" element={<LifePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;