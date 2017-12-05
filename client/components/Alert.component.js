import React, { Component } from 'react';

// Common alert component to notify.
function AlertComponent(props) {
    return (
        <div className="item  col-xs-12 col-lg-12 alert-section">
            <div className="alert alert-info">
                {props.message}
            </div>
        </div>
    );
}

export default AlertComponent;