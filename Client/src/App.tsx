import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import PageLayout from "./layout/PageLayout";
import Error from "./page/Error";
import AuthenLayout from "./layout/AuthenLayout";
import Login from "./page/Login";
import Admin from "./page/Admin";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<Error />}>
        <Route path="/" element={<PageLayout />}>
           <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="/" element={<AuthenLayout />}>
            <Route index element={<Login />}/>
        </Route>
      </Route>
    ),
    { basename: "" }
  );

  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Loading</p>} />
    </>
  );
}

export default App;
