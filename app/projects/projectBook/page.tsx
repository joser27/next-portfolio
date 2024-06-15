import Divider from "@/app/components/Divider";
import Footer from "@/app/components/Footer";

import NavBar from "@/app/components/NavBar";

import React from "react";

const ProjectBookPage = () => {
  return (
    <>
      <NavBar />
      <div className="divider"></div>
      <h1 className="text-2xl font-semiboldW">Book store</h1>
      <br />
      <div className="flex justify-center"></div>
      <br />
      <Divider color="bg-base-200">
        <div>
          <br />
          <h2 className="text-lg font-black">
            TCSS 460 Group Web API by Jose Rodriguez, Taylor R Merwin, Thinh Le,
            Junghyon Jo, and Gabriel S Stupart
          </h2>
          <p>
            The project had distinct front-end and back-end phases, with 60% of
            time focused on back-end development and 40% of time on front-end.
            The back-end involved managing a database for storing books, with
            implemented functions for CRUD operations. Postman was used to test
            API functionalities, ensuring robustness. Docker for consistent
            deployment across environments. On the front-end, Next.js enabled
            efficient server-side rendering and static site generation,
            complemented by MUI CSS for creating visual designs.
          </p>
          <br />
          <br />
        </div>
      </Divider>
      <br />
      <Divider color="bg-base-200">
        <div>
          <br />
          <h2 className="text-lg font-black">Experience</h2>
          <p>
            I gained valuable experience with databases, including writing
            queries and implementing measures to prevent SQL injection attacks.
            Using Postman, I thoroughly tested all API routes, ensuring each
            endpoint functioned correctly through automated testing scenarios.
            Docker was invaluable for ensuring consistent environment deployment
            across stages. For the front-end, I utilized Next.js for server-side
            rendering and static site generation, along with Material-UI (MUI)
            CSS for creating a visually appealing and responsive user interface.
            This project significantly enhanced my skills in full-stack
            development, database management, API testing, containerization, and
            modern front-end development.
          </p>
          <br />
          <br />
        </div>
      </Divider>

      <br />

      <Footer />
    </>
  );
};

export default ProjectBookPage;
