import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utilis/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
        {/* Header

      Body 
      Sidebar 
        MenuItems

      Main Container
        ButtonsList
        VideoContainer
        VideoCard

    */}
      </div>
    </Provider>
  );
};

export default App;
