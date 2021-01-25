import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class GraphsPage extends React.Component {
  state = { sales: { amount: 0 } };

  handleChange(event) {
    const sales = { ...this.state, amount: event.target.value };
    this.setState({ sales });
  }
  render() {
    return (
      <form>
        <h3>Sales data</h3>
        <span onCahnge={this.handleChange}>{this.state.sales.amount}</span>
      </form>
    );
  }
}
export default GraphsPage;
