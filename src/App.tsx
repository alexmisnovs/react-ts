import TimersContextProvider from "./store/timers-store";

import Header from "./components/Header";
import Timers from "./components/Timers";
import AddTimer from "./components/AddTimer";

function App() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
