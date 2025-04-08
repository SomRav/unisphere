import React from "react";
import Communities from "./components/Communities/Communities";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import MyHero from "./components/Pages/MyHero";
import RootLayout from "./components/Layout/RootLayout";
import Resources from "./components/Pages/Resources";
import Events from "./components/Pages/Events";
import NotFound from "./components/Pages/NotFound";
import ComContainer from "./components/Communities/ComContainer";

const App = () => {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MyHero />} />
        <Route path="communities" element={<Communities />} />
        <Route path="communities/Computer-Science" element={<ComContainer />} />
        <Route path="resources" element={<Resources />} />
        <Route path="events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
