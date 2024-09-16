import React from 'react';
import './MemberList.css';

function MemberList({ members, onMemberClick }) {
  return (
    <div className="member-list">
      <div className="members-header">Members</div>
      {members.map((member, index) => (
        <div
          key={index}
          className="member-item"
          onClick={() => onMemberClick(member)}
        >
          {member}
        </div>
      ))}
    </div>
  );
}

export default MemberList;
