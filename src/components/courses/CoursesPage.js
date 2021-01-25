import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = { course: { title: "" } };

  handleChange = (Event) => {
    const course = { ...this.state.course, title: Event.target.value };
    this.setState({ course });
  };

  handleSubmit = (Event) => {
    Event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form type="submit" onSubmit={this.handleSubmit}>
        <h3>You sell very 5 minutes</h3>
        <h5>add sale manually</h5>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);