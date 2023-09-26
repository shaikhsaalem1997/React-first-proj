import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const rederContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}></ContactCard>
        );
    });
    return (
        <div className="ui celled list">{rederContactList}</div>
    );
};

export default ContactList;