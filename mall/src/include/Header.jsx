import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <>
      <nav className="custom-navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link title="MAIN" to="/" className="nav-link">
              MAIN
            </Link>
            <Link title="ABOUT" to="/about" className="nav-link">
              ABOUT
            </Link>

            {/* 드롭다운 영역 */}
            <div className="nav-dropdown">
              <button className="dropdown-toggle" onClick={toggleDropDown}>
                TODO <span className="arrow">▾</span>
              </button>

              {isDropDownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/todo/list" className="nav-link">
                      LIST
                    </Link>
                  </li>
                  <li>
                    <Link to="/todo/add" className="nav-link">
                      ADD
                    </Link>
                  </li>
                  <li>
                    <Link to="/todo/read/20" className="nav-link">
                      READ
                    </Link>
                  </li>
                  <li>
                    <Link to="/todo/modify" className="nav-link">
                      MODIFY
                    </Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <Link to="#" className="nav-link">
                      예비용
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="nav-right">
            <Link to="/member/login" className="nav-link">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
