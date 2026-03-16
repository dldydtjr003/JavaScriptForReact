import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [productDropDownOpen, setIsProductDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
    setIsProductDropDownOpen(false);
  };
  const toggleProductDropDown = () => {
    setIsProductDropDownOpen(!productDropDownOpen);
    setIsDropDownOpen(false);
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

            {/* Todo 드롭다운 영역 */}
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
                    <Link to="/todo/read/260" className="nav-link">
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
            {/* Product 드롭다운 영역 */}
            <div className="nav-dropdown">
              <button
                className="dropdown-toggle"
                onClick={toggleProductDropDown}
              >
                PRODUCT <span className="arrow">▾</span>
              </button>

              {productDropDownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/product/list" className="nav-link">
                      LIST
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/add" className="nav-link">
                      ADD
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/read/260" className="nav-link">
                      READ
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/modify" className="nav-link">
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
