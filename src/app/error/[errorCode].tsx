export default function ErrorHandlerComponent({
	params,
}: {
	params: { errorCode: string };
}) {
	switch (params.errorCode) {
		case "404":
			return <p>404 Not Found</p>;

		default:
			break;
	}
}
