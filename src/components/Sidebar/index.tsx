import { NavLink } from "react-router-dom";
import "./styles.css"
import { routes } from "../../routes";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {routes.map((item) => {
            return (
              <li key={item.path} style={{ padding: "5px" }}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
