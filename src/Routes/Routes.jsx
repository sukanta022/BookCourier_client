import { createBrowserRouter } from "react-router";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-3xl text-red-400'>Hello World</div>,
  },
  {
    path: "/home",
    element: <div className='text-3xl text-red-400'>Hello World home</div>,
  },
]);