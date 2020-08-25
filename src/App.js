import React, { Component } from "react";
import { random } from "lodash";
import "typeface-roboto";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import QuoteMachine from "./components/QuoteMachine";

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.newQuote = this.newQuote.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
      )
      .then((res) => {
        let quotes = res.data;
        this.setState({ quotes }, this.newQuote);
      });
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  /**
   * Returns an integer representing an index in state.quotes
   * If state.quotes is empty, return undefined
   */

  generateNewQuoteIndex = () => {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  };

  newQuote() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }

  render() {
    console.log(this.state.selectedQuoteIndex);
    return (
      <Grid
        className={this.props.classes.container}
        justify="center"
        id="quote-box"
        container
      >
        <Grid xs={11} lg={8} item>
          <QuoteMachine
            selectedQuote={this.selectedQuote}
            newQuote={this.newQuote}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
