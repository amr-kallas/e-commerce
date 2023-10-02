import { RouterProvider } from "react-router-dom";
import Routes from "./routes";
import Wrapper from "./wrapper"
function App() {
  return (
    <Wrapper>
      <RouterProvider router={Routes} />
    </Wrapper>
  );
}

export default App;
