import React from "react";
import Rating from "./Rating";

const TableFrameWork = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>
                <h1>Category</h1>
              </th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Frameworks/Libraries</td>
              <td>React, Node.js, Express.js, Spring Boot</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Tools and Platforms</td>
              <td>
                Git, Docker, AWS, VS. REST APIs Data Structures & Algorithms.
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Software Development</td>
              <td>
                Test Case Design and Execution, MVC Design, Full Software
                Development Life Cycle, Agile Software Development, Coding
                Standards
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableFrameWork;
