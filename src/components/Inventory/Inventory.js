import React from "react";
import "./Inventory.css"
import {rows} from "./Projects.js"

function Inventory() {
  return (
        <table>

          {rows.map(row => (

            <tr >

                  <td>
                      <h2>{row.project}</h2>
                      <h1>{row.desc}</h1>
                  </td>

                  <td className="field">
                      <h3>{row.field}</h3>
                  </td>

                  <td className="year">
                      <h3>{row.year}</h3>
                  </td>

            </tr>
          ))}

        </table>
  );
}

export default Inventory;
