import React from "react";

const people = [
  {
    name: "Github",
    role: "https://github.com/joser27",
    imageUrl: "./github.svg",
  },
  {
    name: "Linkedin",
    role: "https://www.linkedin.com/in/joser27/",
    imageUrl: "./linkedin.svg",
  },
  {
    name: "Email",
    role: "joser27@uw.edu",
    imageUrl: "./email.svg",
  },
];

const Selection = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Me
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600"></p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      <a
                        href={person.role}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {person.role}
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Selection;
