import Page from "@/app/components/Page";

export default function DynamicPage({
	params,
}: {
	params: { pageKey: string };
}) {
	return <Page pageKey={params.pageKey}></Page>;
}
