import "../styles/styles.scss";
import AppRoutes from "./AppRoutes";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={ store }>
      <AppRoutes />
    </Provider>
  );
}

export default App;