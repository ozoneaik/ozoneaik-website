import Link from "next/link";
import sidebarStyles from "../assets/styles/sidebar.module.css";


export const Sidebar = () =>{
    return (
        <aside className={sidebarStyles.sidebar}>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>News</Link>
            <Link href={'/'}>Contact</Link>
            <Link href={'/'}>About</Link>
        </aside>
    )
}