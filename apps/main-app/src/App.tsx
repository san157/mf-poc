import React, { Suspense } from "react";

import "./App.css";

const ChildApp1 = React.lazy(() => import("childApp1/App"));
const ChildApp2 = React.lazy(() => import("childApp2/App"));

function App() {
  return (
    <div>
      <h1>Main App</h1>

      <Suspense fallback={<div>Loading Child 1...</div>}>
        <ChildApp1 />{" "}
      </Suspense>

      <Suspense fallback={<div>Loading Child 2...</div>}>
        <ChildApp2 />
      </Suspense>
    </div>
  );
}

export default App;
