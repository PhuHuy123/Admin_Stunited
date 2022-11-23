import "./style/App.scss";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTE } from "./route.constants";

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.HOME,
    title: "ST United - Admin",
    component: lazy(() => import("@app/pages/Admin")),
  },
];
function App() {
  return (
    <div className="App">
      <Suspense fallback="o">
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
