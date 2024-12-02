import { MantineProvider } from "@mantine/core";
import "./App.css";
import NotesApp from "./Projects/08-notes/NotesApp.jsx";

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <NotesApp />
      </MantineProvider>
    </div>
  );
}

export default App;
