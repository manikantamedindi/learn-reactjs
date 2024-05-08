import React from "react";
import { createRoot } from "react-dom/client";

// Arrow Function
const HeadingComponent = () => (
  <div className="container">
    <h1 className="heading">Heading Component</h1>
    <Title />
    <Title2 />
  </div>
);

// Normal Function
function Title2() {
  return <h3>Inside Another Title</h3>;
}

const Title = () => <h2>This is Inside Title Component</h2>;

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
