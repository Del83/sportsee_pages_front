import Header from "./Header"
import SideBar from "./SideBar"

/**
 * * Wrap layout
 * @param {Object} params
 * @param {JSX} params.children
 * @return {JSX} Layout react component
 */
function Layout ({children}) {
    return (
        <div className="layout">
            <Header />
            {children}
            <SideBar />
        </div>
    )
}

export default Layout;

