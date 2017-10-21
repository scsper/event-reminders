import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addMember, removeMember } from '../../actions/event';
import { selectors } from '../../reducers';
import './role.css';

class Role extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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

  handleRemove(id) {
    this.props.removeMember(id, this.props.role.id);
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      this.handleSubmit(e);
    }
  }

  render() {
    const { role, teamMembers } = this.props;

    return (
      <li className="role">
        <h2 className="role-name">{role.name}</h2>
        <ul className="member-list">
          {teamMembers.map(teamMember => (
            <li key={teamMember.id}>
              <p className="member-name">{teamMember.name}</p>
              <button onClick={this.handleRemove.bind(this, teamMember.id)} className="remove-member-from-role-button">x</button>
            </li>
          ))}
        </ul>
        <div className="add-new-member-section">
          <input
            type="text"
            className="add-new-member-input"
            placeholder="Add New Member"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <button onClick={this.handleSubmit}>Add</button>
        </div>
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
  return bindActionCreators({ addMember, removeMember }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);
