import { createBrowserRouter } from "react-router";
import { Dashboard } from "../components/Dashboard";
import { TaskList } from "../components/TaskList";
import { TaskDetail } from "../components/TaskDetail";
import { Calendar } from "../components/Calendar";
import { Profile } from "../components/Profile";
import { Onboarding } from "../components/Onboarding";
import { DesignSystem } from "../components/DesignSystem";
import { Credits } from "../components/Credits";
import { Persona } from "../components/Persona";
import { Wireframe } from "../components/Wireframe";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "tasks", Component: TaskList },
      { path: "tasks/:id", Component: TaskDetail },
      { path: "calendar", Component: Calendar },
      { path: "profile", Component: Profile },
    ],
  },
  { path: "/onboarding", Component: Onboarding },
  { path: "/design-system", Component: DesignSystem },
  { path: "/credits", Component: Credits },
  { path: "/persona", Component: Persona },
  { path: "/wireframe", Component: Wireframe },
]);
