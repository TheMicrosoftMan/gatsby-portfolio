import React, { useState } from "react";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";

const Sidebar = () => {
  const [sidebarState, setSidebarState] = useState(false);

  const sidebarItems = [
    {
      icon: <i className="mi mi-Home" />,
      name: "Home",
      link: "/"
    },
    {
      icon: <i className="mi mi-Dictionary" />,
      name: "Blog",
      link: "/blog"
    },
    {
      icon: <i className="mi mi-Code" />,
      name: "Projects",
      link: "/projects"
    },
    {
      icon: <i className="mi mi-github" />,
      name: "GitHub",
      link: "/repos"
    },
    {
      icon: <i className="mi mi-ContactInfo" />,
      name: "About",
      link: "/about"
    }
  ];

  return (
    <aside className={`sidebar${sidebarState ? " sidebar-open" : ""}`}>
      <div
        className="sidebar__item"
        onClick={() => setSidebarState(!sidebarState)}
      >
        <i className="mi mi-GlobalNavigationButton" />
        <CSSTransition
          in={sidebarState}
          timeout={150}
          classNames="opacity-animation"
          unmountOnExit
        >
          <span className="sidebar__item_title">Menu</span>
        </CSSTransition>
      </div>
      {sidebarItems.map((item, index) => {
        return (
          <Link to={item.link}>
            <div className="sidebar__item">
              {item.icon}
              <CSSTransition
                in={sidebarState}
                timeout={150}
                classNames="opacity-animation"
                unmountOnExit
              >
                <span className="sidebar__item_name">{item.name}</span>
              </CSSTransition>
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
