import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => 
  import("./pages/PageLogin"));
const IndexPage = lazy(() => 
  import("./pages/PageIndex"));

function MainRouter() {
  return (
    <Router>
      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="*" element={<h1>404 Page Error</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default MainRouter;
