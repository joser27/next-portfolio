import Collapse from "@/app/components/Collapse";
import Divider from "@/app/components/Divider";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import React from "react";

const ProjectJamPage = () => {
  return (
    <>
      <NavBar />
      <div className="divider"></div>
      <h1 className="text-2xl font-semiboldW">UWT Spring game</h1>
      <br />
      <div className="flex justify-center">
        <Collapse />
      </div>
      <br />
      <Divider color="bg-base-200">
        <div>
          <br />
          <h2 className="text-lg font-black">
            University of Washington tacoma spring game jam.
          </h2>
          <p>
            A 2D story game inspired by Stardew Valley, where players embark on
            a quest in a top-down view to retrieve the towns centerpiece for the
            Spring festival. The game is designed as a challenging adventure
            where players venture out, encountering and fighting monsters to
            obtain this essential item.
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
            I started learning JavaScript and game programming over the course
            of two weeks. I started learning JavaScript from scratch because I
            was excited about making interactive experiences, and I worked on
            using it with HTML5 2D canvas for game development. Starting with
            fundamental concepts like variables, functions, and event handling,
            I progressively advanced to more complex topics such as game loop
            management, collision detection, and sprite animation. This
            challenging assignment developed my technical abilities while also
            inspiring an intense interest for game development, which motivates
            me to keep learning and developing in this exciting industry.
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

export default ProjectJamPage;
