"use client";
import "./Page.css";
import {
	PageData,
	PageContentType,
	SectionContent,
	TextContent,
} from "../types/page";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ pageKey }: { pageKey: string }): JSX.Element => {
	const [pageData, setPageData] = useState<PageData>();
	const scanSection = (section: SectionContent, depth: number) => {
		if (section.type == PageContentType.Text) {
			console.log("Triggering TextContent logic...");

			const texts: JSX.Element[] = [];
			(section.content as TextContent[]).forEach((textContent) => {
				console.log(<p>{textContent.content}</p>);

				texts.push(<p>{textContent.content}</p>);
			});
			return <>{texts}</>;
		} else if (section.type == PageContentType.Section) {
			console.log("Triggering SectionContent logic...");

			const elements: JSX.Element[] = [];
			section.content.forEach((section, index) => {
				if (section.type == PageContentType.Text) {
					elements.push(
						<p key={`${depth}*${index}`}>
							{(section as TextContent).content}
						</p>
					);
				} else if (section.type == PageContentType.Section) {
					elements.push(
						scanSection(section as SectionContent, depth + 1)
					);
				}
			});
			return (
				<section>
					<p className={`heading heading-${depth}`}>
						{section.heading}
					</p>
					{elements}
				</section>
			);
		} else {
			throw new Error("pageType not defined!");
		}
	};
	if (pageKey != "amino_acids") {
		redirect("/error/404");
	}
	useEffect(() => {
		fetch(`/api/pages?key=${pageKey}`)
			.then((value) => {
				return value.json();
			})
			.then((response) => {
				if (response.success === false) {
					console.log("not found");
				} else {
					setPageData(response.document);
				}
			});
	}, []);
	const components: JSX.Element[] = [];
	pageData?.content.forEach((content, index) => {
		if (content.type === PageContentType.Text) {
			components.push(
				<p key={index}>{(content as TextContent).content}</p>
			);
		} else {
			components.push(scanSection(content as SectionContent, 0));
		}
	});
	const element =
		pageData && components ? (
			<>
				<p className="page-title">{pageData.title}</p>
				{components}
				<hr></hr>
				<p className="footnote">{pageData.footnotes}</p>
				<p className="copyright">
					Copyright &copy; 2024-2025 Proteinpedia Foundation
				</p>
			</>
		) : (
			<>
				<div className="d-flex justify-content-center vh-100">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			</>
		);
	return <div className="page">{element}</div>;
};
export default Page;
