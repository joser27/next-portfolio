import React from "react";
import Rating from "./Rating";

const Table = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>
                <h1>Programming languages</h1>
              </th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Java</td>
              <td>
                <Rating rating={4} />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Python</td>
              <td>
                <Rating rating={4} />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>JavaScript</td>
              <td>
                <Rating rating={3} />
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>TypeScript</td>
              <td>
                <Rating rating={3} />
              </td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>5</th>
              <td>C</td>
              <td>
                <Rating rating={2} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
