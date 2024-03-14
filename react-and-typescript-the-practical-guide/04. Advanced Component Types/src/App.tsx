import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import Container from "../components/Container.tsx";
import { useRef } from "react";
import Form, { type FormHandle } from "../components/Form.tsx";

function App() {
  const customFormRef = useRef<FormHandle>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    customFormRef.current?.clear();
    console.log(extractedData);
  }

  return (
    <Container as="main">
      <Container as="section" style={{ textAlign: "center" }}>
        <h1>My App</h1>
      </Container>
      <Form onSave={handleSave} ref={customFormRef}>
        <Input id="name" label="Name" type="text" ref={nameRef} />
        <Input id="age" label="Age" type="number" ref={ageRef} />
        <p>
          <Button>Submit</Button>
        </p>
        <p>
          <Button href="https://www.google.com" target="_blank">
            Cancel
          </Button>
        </p>
      </Form>
    </Container>
  );
}

export default App;
