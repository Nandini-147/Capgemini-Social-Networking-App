import React from "react";
import "./PhotosPage.css";

const photoUrls = [
  "https://via.placeholder.com/150/0000FF/FFFFFF?text=Photo+1",
  "https://via.placeholder.com/150/FF0000/FFFFFF?text=Photo+2",
  "https://via.placeholder.com/150/00FF00/FFFFFF?text=Photo+3",
  "https://via.placeholder.com/150/FFFF00/000000?text=Photo+4",
  "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Photo+5",
  "https://via.placeholder.com/150/00FFFF/000000?text=Photo+6",
];

const PhotosPage = () => {
  return (
    <div className="photos-page-container">
      <div className="main-content">
        <h2>Photos</h2>
        <div className="photos-grid">
          {photoUrls.map((url, index) => (
            <img key={index} src={url} alt={`Photo ${index}`} />
          ))}
        </div>
      </div>

      <div className="sidebar">
        <div className="friends-section">
          <h3 className="section-title">My Friends</h3>
          <div className="friends-grid">
            {[...Array(9)].map((_, index) => (
              <img
                key={index}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt={`Friend ${index}`}
                className="friend-avatar"
              />
            ))}
          </div>
          <button className="view-button">View All Friends</button>
        </div>

        <div className="groups-section">
          <h3 className="section-title">Latest Groups</h3>
          {[...Array(3)].map((_, index) => (
            <div className="group-card" key={index}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                alt="Group"
                className="group-icon"
              />
              <div>
                <strong>Sample Group One</strong>
                <p>This is a Dobbie social network sample group</p>
              </div>
            </div>
          ))}
          <button className="view-button">View All Groups</button>
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
