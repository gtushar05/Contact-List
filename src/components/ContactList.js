import React from 'react';
import ContactCard from './ContactCard';
import LoadingSpinner from './LoadingSpinner';
import './ContactList.css';

const ContactList = ({ contacts, isLoading, onDelete }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <h3 className="empty-state-title">No contacts found</h3>
        <p className="empty-state-description">
          Try adjusting your search or add a new contact to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-list">
      <div className="contact-list-header">
        <h2 className="contact-list-title">
          Contacts ({contacts.length})
        </h2>
      </div>
      
      <div className="contact-grid">
        {contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
