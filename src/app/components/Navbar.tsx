"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import { usePathname } from "next/navigation";
function NavbarItem({ text, link }: { text: string; link: string }) {
	const active = usePathname() === link;
	return (
		<li className={`nav-item`}>
			<a className="nav-link" href={link}>
				{text}
			</a>
		</li>
	);
}
export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					Proteinpedia v0.1.2 Experimental
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="nav me-auto mb-2 mb-lg-0">
						<NavbarItem
							text="About"
							link="/pages/about"
						></NavbarItem>
						<NavbarItem
							text="Information"
							link="/pages/info"
						></NavbarItem>
						<NavbarItem
							text="Projects"
							link="/pages/projects"
						></NavbarItem>
					</ul>
					<form className="d-flex" role="search">
						{/* <button className="btn btn-primary mx-2" type="submit">
							Advanced
						</button> */}
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search Proteinpedia..."
							aria-label="Search"
						></input>
						<button
							className="btn btn-outline-success"
							type="submit"
						>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
