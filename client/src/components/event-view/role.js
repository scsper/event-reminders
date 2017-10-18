import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addMember } from '../../actions/event';
import { selectors } from '../../reducers';

class Role extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    this.props.addMember(this.state.value, this.props.role.id);
    this.setState({
      value: ''
    });
  }

  render() {
    const { role, teamMembers } = this.props;

    return (
      <li>
        <h2>{role.name}</h2>
        <ul>{teamMembers.map(teamMember => <li key={teamMember.id}>{teamMember.name}</li>)}</ul>
        <input type="text" placeholder="Add New Member" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </li>
    );
  }
}

function mapStateToProps(state, { role }) {
  return {
    teamMembers: selectors.getTeamMembers(state, role.teamMemberIds)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMember }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);
