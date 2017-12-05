import React from 'react';

// Place holder component to show loading icon while image lazy loads.
export default function Placeholder() {
  return (
    <div className="placeholder">
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </div>
  );
}