// import React from 'react';
// import './MembersPage.css'; 

// const MemberCard = ({ username }) => (
//   <div className="member-card">
//     <img src="placeholder-profile.png" alt="Profile" className="profile-pic"/>
//     <div className="member-info">
//       <p>{username}</p>
//       <div className="buttons">
//         <button>Add Friend</button>
//         <button>Send Message</button>
//         <button>View Profile</button>
//       </div>
//     </div>
//   </div>
// );

// const MembersPage = () => {
//   const members = ['SampleUser1', 'SampleUser2', 'SampleUser3']; // Example member data

//   return (
//     <div className="members-page">
//       <main className="main-content">
//         {members.map((username, index) => (
//           <MemberCard key={index} username={username} />
//         ))}

import React from 'react';
import './MembersPage.css'; // Assuming you have some CSS for styling

const MemberCard = ({ username }) => (
  <div className="member-card">
    <img src="placeholder-profile.png" alt="Profile" className="profile-pic"/>
    <div className="member-info">
      <p>{username}</p>
      <button>Add Friend</button>
      <button>Send Message</button>
      <button>View Profile</button>
    </div>
  </div>
);

const MembersPage = () => {
  const members = ['SampleUser1', 'SampleUser2', 'SampleUser3']; // Example member data

  return (
    <div className="members-page">
      <header className="header">
        Members
      </header>

      <main className="main-content">
        {members.map((username, index) => (
          <MemberCard key={index} username={username} />
        ))}
        
       

        


        
        {/* Right Content - Sidebar */}
        <div className="profile-right">
          {/* My Friends */}
          <div className="sidebar-section">
            <div className="sidebar-header">My Friends</div>
            <div className="friends-grid">
              {[...Array(12)].map((_, i) => (
                <img
                  key={i}
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Friend"
                  className="friend-avatar"
                />
              ))}
            </div>
            <button className="btn">View All Friends</button>
          </div>

          {/* Latest Groups */}
          <div className="sidebar-section">
            <div className="sidebar-header">Latest Groups</div>
            {[...Array(3)].map((_, i) => (
              <div className="group-card" key={i}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/74/74472.png"
                  alt="Group"
                  className="group-icon"
                />
                <div>
                  <strong>Sample Group One</strong>
                  <p>This is a Dobbio social network sample group</p>
                </div>
              </div>
            ))}
            <button className="btn">View All Groups</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MembersPage;
