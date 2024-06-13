import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import PostForm from "./components/PostForm.jsx";
import AddPost from "./pages/AddPost.jsx";
import Post from "./components/Post.jsx";
import EditPost from "./pages/EditPost.jsx";
import AllPost from "./pages/AllPost.jsx";
import TermsAndConditions from "./components/Terms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Login />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      {
        path: "/edit-post/:slug",
        element: <EditPost />,
      },
      {
        path: "/about",
        element: <AllPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
