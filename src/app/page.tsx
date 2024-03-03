"use client";
import "./page.module.css";
export default function Home() {
	return (
		<main>
			{/* <Image
					className="d-block mx-auto mb-4"
					src="/docs/5.3/assets/brand/bootstrap-logo.svg"
					alt=""
					width="72"
					height="57"
				></Image> */}
			<div className="px-4 py-5 my-5 text-center">
				<img src="..." alt="..."></img>
				<h1 className="display-5 fw-bold text-body-emphasis">
					Proteinpedia
				</h1>
				<div className="col-lg-6 mx-auto">
					<p className="lead mb-4">
						A community project to categorize and conveniently query
						any protein used in biochemistry.
					</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button
							type="button"
							className="btn btn-primary btn-lg px-4 gap-3"
						>
							Search now
						</button>
						<button
							type="button"
							className="btn btn-outline-secondary btn-lg px-4"
							onClick={() => {
								location.assign("/about");
							}}
						>
							About us
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
