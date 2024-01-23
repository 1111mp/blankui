const App = `import {Link} from "@blankui-org/react";

export default function App() {
  return (
    <Link color="primary">Link</Link>
  );
}`;

const react = {
  "/App.tsx": App,
};

const usage = {
  ...react,
};

export default usage;
