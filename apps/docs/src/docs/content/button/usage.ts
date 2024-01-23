const App = `import {Button} from "@blankui-org/react";

export default function App() {
  return (
    <Button color="primary">Button</Button>
  );
}`;

const react = {
  "/App.tsx": App,
};

const usage = {
  ...react,
};

export default usage;
