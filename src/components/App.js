import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

// Theme
import theme from "./ui/Theme";

// Components
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>customsoftwares</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>mobileapps</div>}
          />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>about us</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>contact us</div>}
          />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
