import { useContext } from "react";
import { StateContext } from "../context/Contexts";

const Header = () => {
  const { resumeData } = useContext(StateContext);

  if (!resumeData) {
    return null;
  }

  const { name, title, contact } = resumeData;

  return (
    <header className="py-8 px-6 bg-gray-50 text-gray-800 rounded-lg shadow-md mb-8">
      <h1 className="text-4xl font-extrabold text-left text-red-200 mb-2">
        {name}
      </h1>
      <h1 className="text-4xl font-extrabold text-left text-red-500 mb-2">
        {title}
      </h1>
      {/* <h2 className="text-2xl font-semibold text-center text-gray-600 mb-4"></h2> */}
      <div className="flex flex-wrap  gap-4 text-gray-700 text-sm">
        {/* <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm"> */}
        <p className="flex items-center">
          <i className="fas fa-phone mr-2 text-indigo-500"></i>
          {contact.phone}
        </p>
        <p className="flex items-center">
          <i className="fas fa-envelope mr-2 text-indigo-500"></i>
          <a href={`mailto:${contact.email}`} className="hover:underline">
            {contact.email}
          </a>
        </p>
        <p className="flex items-center">
          <i className="fab fa-linkedin mr-2 text-indigo-500"></i>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p className="flex items-center">
          <i className="fab fa-github mr-2 text-indigo-500"></i>
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </p>
        <p className="flex items-center">
          <i className="fas fa-map-marker-alt mr-2 text-indigo-500"></i>
          <a
            href={`https://www.google.com/maps/place/${contact.location.replace(" ", "+")}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {contact.location}
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
