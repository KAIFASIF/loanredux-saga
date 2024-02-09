import { Suspense, lazy } from "react";
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RoleWrapper from "./components/app-layout";
import LoanDetails from "./screens/loan-details";

function App() {
  const Signin = lazy(() => import("./screens/signin"));
  const Summary = lazy(() => import("./screens/summary"));
  const auth = true;
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            {auth ? (
              <Route path="/" element={<RoleWrapper role="ROLE_USER" />}>
                <Route
                  index
                  path="/"
                  element={
                    <Suspense>
                      <Summary />
                    </Suspense>
                  }
                />
                <Route                  
                  path="/:loanId/:id/loan-details"
                  element={
                    <Suspense>
                      <LoanDetails />
                    </Suspense>
                  }
                />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            ) : (
              <Route path="/" element={<Outlet />}>
                <Route
                  index
                  element={
                    <Suspense>
                      <Signin />
                    </Suspense>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            )}
          </Route>
        )
      )}
    />
  );
}

export default App;
