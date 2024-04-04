import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  console.log("single contact", contact);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);
  return (
    <>
      <div>
        <h1>Contact Information</h1>
      </div>
      {contact && (
        <div>
          <h2>Name: {contact.name} </h2>
          <h2>Username: {contact.username} </h2>
          <h2>Phone Number: {contact.phone} </h2>
          <h2>Email: {contact.email} </h2>
          <h2>Company: {contact.company.name} </h2>
        </div>
      )}
    </>
  );
}
