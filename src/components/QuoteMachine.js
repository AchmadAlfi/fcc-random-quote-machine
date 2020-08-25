import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const QuoteMachine = (props) => (
  <Card style={{ width: "500px", margin: "auto", padding: "2em" }}>
    <CardContent>
      {props.selectedQuote ? (
        <Typography id="text" variant="h5" style={{ textAlign: "center" }}>
          <i className="fa fa-quote-left"></i>
          &nbsp; &nbsp;
          {props.selectedQuote.quote}
        </Typography>
      ) : null}
      {props.selectedQuote ? (
        <Typography id="author" style={{ textAlign: "right" }}>
          - {props.selectedQuote.author}
        </Typography>
      ) : null}
    </CardContent>
    <CardActions>
      <a
        href={encodeURI(`https://www.twitter.com/intent/tweet`)}
        className="btn btn-primary"
        id="tweet-quote"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <Button
        size="medium"
        variant="contained"
        onClick={props.newQuote}
        disableElevation
        color="primary"
        style={{ marginLeft: "18em", width: "100%" }}
        id="new-quote"
      >
        New Quote
      </Button>
    </CardActions>
  </Card>
);

export default QuoteMachine;
