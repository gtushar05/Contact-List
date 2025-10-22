import React, { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContact from './components/AddContact';
import Header from './components/Header';

// Sample contact data - in a real app, this would come from an API
const initialContacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=667eea&color=fff'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 234-5678',
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=764ba2&color=fff'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    phone: '+1 (555) 345-6789',
    avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=667eea&color=fff'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    phone: '+1 (555) 456-7890',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Wilson&background=764ba2&color=fff'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david.brown@example.com',
    phone: '+1 (555) 567-8901',
    avatar: 'https://ui-avatars.com/api/?name=David+Brown&background=667eea&color=fff'
  }
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  // Simulate API loading
  useEffect(() => {
    const loadContacts = async () => {
      setIsLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setContacts(initialContacts);
      setFilteredContacts(initialContacts);
      setIsLoading(false);
    };

    loadContacts();
  }, []);

  // Filter contacts based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  }, [searchTerm, contacts]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddContact = (newContact) => {
    const contact = {
      ...newContact,
      id: Date.now(), // Simple ID generation
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newContact.name)}&background=${Math.random() > 0.5 ? '667eea' : '764ba2'}&color=fff`
    };
    
    setContacts(prev => [...prev, contact]);
    setShowAddForm(false);
  };

  const handleDeleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div className="app">
      <div className="app-container">
        <Header />
        
        <div className="app-content">
          <div className="search-section">
            <SearchBar onSearch={handleSearch} />
            <button 
              className="add-contact-btn"
              onClick={() => setShowAddForm(true)}
            >
              + Add Contact
            </button>
          </div>

          {showAddForm && (
            <AddContact 
              onAdd={handleAddContact}
              onCancel={() => setShowAddForm(false)}
            />
          )}

          <ContactList 
            contacts={filteredContacts}
            isLoading={isLoading}
            onDelete={handleDeleteContact}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
