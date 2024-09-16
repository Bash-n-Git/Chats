import React, { useState } from 'react';
import MemberList from './MemberList';
import ChatWindow from './ChatWindow';
import './Chats.css';

function Chat() {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = ['Member 1', 'Member 2', 'Member 3'];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleSendMessage = (message) => {
    // Logic to send a message can be handled here if needed
  };

  return (
    <div className="chats-page">
      <MemberList members={members} onMemberClick={handleMemberClick} />
      {selectedMember && (
        <ChatWindow
          member={selectedMember}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
}

export default Chat;
