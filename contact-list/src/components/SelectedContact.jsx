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
  //   return (
  //     <div>
  //         <h1>Contact Details</h1>
  //         {contact && (
  //             <div>
  //         <p>Name: {contact.name}</p>
  //         <p>Username: {contact.username}</p>
  //         <p>Email: {contact.email}</p>
  //         <p>Phone: {contact.phone}</p>
  //         <div/>
  //         )}

  //   )}
  //   <button
  //   onClick={() => {
  //     setSelectedContactId(null)
  //   }}
  //   >GoBack</button>
  // </div>
  //   );
}
