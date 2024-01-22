// ContactPage.jsx
import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700">
        Have questions or feedback? We'd love to hear from you! Contact us
        through the following channels:
      </p>
      <ul className="list-disc pl-8 mt-4">
        <li>
          Email:{" "}
          <a href="mailto:info@example.com" className="text-blue-500">
            info@example.com
          </a>
        </li>
        <li>
          Phone: <span className="text-blue-500">+1 (555) 123-4567</span>
        </li>
        <li>
          Address:{" "}
          <span className="text-blue-500">123 Main Street, Cityville</span>
        </li>
      </ul>
      <p className="text-gray-700 mt-4">
        You can also reach out to us on social media. Follow us on Twitter,
        Facebook, and Instagram for updates and special promotions.
      </p>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://twitter.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Twitter
        </a>
        <a
          href="https://facebook.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
