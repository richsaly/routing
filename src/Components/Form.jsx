import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryLocation, setCountryLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out, you will get a response soon");

    setName('');
    setEmail('');
    setCountryLocation('');
    setPhoneNumber('');
  };

  return (
    <div className=" mt-48 mb-10 flex flex-col items-center justify-center border border-yellow-500 rounded-2xl py-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full px-5 py-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-black text-2xl" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-5 py-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-black text-2xl" required />
        <input type="text" value={countryLocation} onChange={(e) => setCountryLocation(e.target.value)} placeholder="Country Location" className="w-full px-5 py-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-black text-2xl" required />
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" className="w-full px-5 py-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-black text-2xl" required />
        <button type="submit" className="w-full px-5 py-3 text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}

export default Form;
