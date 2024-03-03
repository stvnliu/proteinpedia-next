"use client";
import Link from "next/link";

export default function InformationPage() {
	return (
		<div className="information">
			<ol className="list-group list-group-numbered">
				<li className="list-group-item d-flex justify-content-between align-items-start">
					<div className="ms-2 me-auto">
						<div className="fw-bold">
							Amino acids
							<span className="badge bg-primary rounded-pill mx-3">
								2023-02-29
							</span>
						</div>
						<div>
							Amino acids are organic compounds that contain both
							amino (NH2) and carboxylic acid (COOH) functional
							groups except for proline, which serve as the
							building blocks of proteins. There are more than 500
							amino acids in the nature, but only 22 of them are
							involved in protein synthesis which are called
							proteinogenic amino acids, and only 20 of them are
							coded it the DNA with 2 additional amino acids that
							are not coded in the DNA (Selenocysteine and
							pyrrolysine) ...
						</div>

						<hr></hr>
						<button
							className="btn btn-primary"
							onClick={() => {
								location.assign("/pages/info/amino_acids");
							}}
						>
							Read
						</button>
					</div>
				</li>
			</ol>
		</div>
	);
}
