import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";

function App() {
    return (
        <main>
            <Input id="name" label="Your name" type="text" />
            <Input id="age" label="Your age" type="number"/>
            <p>
                <Button>Submit</Button>
                
            </p>
            <p>
                <Button href="https://www.google.com" target="_blank">Cancel</Button>
            </p>
            
        </main>
    )
}

export default App;
