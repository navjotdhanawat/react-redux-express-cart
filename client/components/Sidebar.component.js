import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

/**
 * @param  {} props
 * Sidebar component to show categories
 */
function SidebarComponent(props) {
    return (
        <section>
            <Card className="sidebar-section">
                <List>
                    <ListItem primaryText="SPECIAL OFFERS" leftIcon={<ContentInbox />} />
                    <ListItem primaryText="GROCERY & STAPLES" leftIcon={<ActionGrade />} />
                    <ListItem primaryText="CHOCOLATES & DESSERTS" leftIcon={<ContentSend />} />
                    <ListItem primaryText="BEVERAGES" leftIcon={<ContentDrafts />} />
                    <ListItem primaryText="SNACKS" leftIcon={<ContentInbox />} />
                </List>
                <List>
                    <ListItem primaryText="My Account" rightIcon={<ActionInfo />} />
                    <ListItem primaryText="My Orders" rightIcon={<ActionInfo />} />
                    <ListItem primaryText="Contact Us" rightIcon={<ActionInfo />} />
                </List>
            </Card>
        </section>
    );
}

export default SidebarComponent;