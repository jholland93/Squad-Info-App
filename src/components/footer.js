import React from "react";
import "../css/footer.css";

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ul className="footer">
            <li>
              <a href="https://github.com/jholland93/datarep_project">Github</a>
            </li>
            <li>
              <p>👋</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
