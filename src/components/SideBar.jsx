import { Link } from "react-router-dom";

function SideBar() {
    const sidebarStyle = {
        background: '#63bbf2'
    };
    return (
        <ul className="navbar-nav sidebar sidebar-dark accordion" style={sidebarStyle} id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-25" src="/images/futbol-solid.svg" alt="Logo" />
                </div>
            </Link>
            <hr className="sidebar-divider my-0 border-dark" />
            <li className="nav-item active">
                <Link className="nav-link text-dark" to="/">
                    <i className="fas fa-fw fa-tachometer-alt text-dark"></i>
                    <span>Dashboard - LT10</span>
                </Link>
            </li>
            <hr className="sidebar-divider border-dark" />
            <div className="sidebar-heading text-dark">Actions</div>
            <li className="nav-item">
                <Link className="nav-link collapsed text-dark" to="/last-movie">
                    <i className="fas fa-fw fa-folder text-dark"></i>
                    <span>Último Producto</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" to="/genres">
                    <i className="fas fa-fw fa-users text-dark"></i>
                    <span>Usuarios</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" to="/movies">
                    <i className="fas fa-fw fa-tshirt text-dark"></i>
                    <span>Productos</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed text-dark" to="/search">
                    <i className="fas fa-search text-dark"></i>
                    <span>Buscar</span>
                </Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block border-dark" />
        </ul>
    );
}

export default SideBar;