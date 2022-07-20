import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './CustomLink.css';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (

        <Link className="nav-item"
            style={{ color: match ? "red" : " ", fontWeight: match ? "bold" : " " }}
            to={to}
            {...props}
        >
            {children}
        </Link>

    );
}
export default CustomLink;