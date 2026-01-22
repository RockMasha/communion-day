import { Routes, Route } from "react-router-dom";
import { Login } from "../Login";
import { Home } from "../Home";
import { ROUTES } from "@/shared/consts/ROUTES";
import PrivateRoute from "./PrivateRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";
import Layout from "@/components/layout/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path={ROUTES.login}
          element={<PublicOnlyRoute Component={Login} />}
        />
        <Route path={ROUTES.home} element={<PrivateRoute Component={Home} />} />
      </Route>
    </Routes>
  );
}

export default App;
