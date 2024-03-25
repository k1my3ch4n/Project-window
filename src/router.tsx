import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";
const BASE_URL = import.meta.env.BASE_URL;

export const routes: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        path: "/home",
        Component: lazy(() => import("./Home")),
      },
    ],
  },
];

export const router = createBrowserRouter(
  [
    {
      Component: Layout,
      children: [
        {
          path: "/home",
          Component: lazy(() => import("./Home")),
        },
      ],
    },
  ],
  { basename: BASE_URL }
);
