import { Link, Outlet } from "@tanstack/react-router";

export default function layout() {

    return <div className="wrapper">
        <Outlet />
        <nav>
            <Link
                to="/"
                className="nav-item"
                activeProps={{
                    className: 'active',
                }}>
                <i className="fa fa-home"></i><span>Home</span>
            </Link>

            <Link
                to="/activity"
                className="nav-item "
                activeProps={{
                    className: 'active',
                }}
            >
                <i className="far fa-chart-bar"></i><span>Activity</span>
            </Link>

            <a className="nav-item" href="user.html">
                <i className="far fa-user"></i><span>User</span>
            </a>

        </nav>
    </div>
}