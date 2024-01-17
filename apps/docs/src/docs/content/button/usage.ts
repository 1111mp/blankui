const App = `import {Button} from "@blankui-org/react";

export default function App() {
  return (
    <Button primary label="Button" />
  );
}`;

const react = {
  "/App.tsx": App,
};

const usage = {
  ...react,
};

export default usage;
