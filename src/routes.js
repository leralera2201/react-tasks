import { lazy } from "react";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Buttons")),
    exact: true,
  },
  {
    path: "/typography",
    component: lazy(() => import("./pages/Typography")),
    exact: true,
  },
  {
    path: "/dropdown",
    component: lazy(() => import("./pages/Dropdown")),
    exact: true,
  },
  {
    path: "/select",
    component: lazy(() => import("./pages/Select")),
    exact: true,
  },
  {
    path: "/alert",
    component: lazy(() => import("./pages/Alert")),
    exact: true,
  },
  {
    path: "/switch",
    component: lazy(() => import("./pages/Switch")),
    exact: true,
  },
  {
    path: "/spin",
    component: lazy(() => import("./pages/Spin")),
    exact: true,
  },
  {
    path: "/progress",
    component: lazy(() => import("./pages/Progress")),
    exact: true,
  },
  {
    path: "/modal",
    component: lazy(() => import("./pages/Modal")),
    exact: true,
  },
  {
    path: "/notification",
    component: lazy(() => import("./pages/Notification")),
    exact: true,
  },
];
