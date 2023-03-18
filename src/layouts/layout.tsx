import { Link, Outlet } from "@tanstack/react-router";

export default function layout() {

    return <div className="wrapper">
        <div id="homepage">
            <Outlet />
        </div>
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

            <Link 
                className="nav-item" 
                to="/settings"
                activeProps={{
                    className: 'active',
                }}
            >
                <i className="far fa-user"></i><span>Settings</span>
            </Link>

        </nav>
    </div>
}