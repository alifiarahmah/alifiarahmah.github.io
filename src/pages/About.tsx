import Layout from "../components/common/Layout";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import axios from "axios";
import { Box } from "@chakra-ui/react";

export default function About() {
	const [content, setContent] = useState("");

	useEffect(() => {
		axios.get("https://raw.githubusercontent.com/alifiarahmah/alifiarahmah/main/README.md")
			.then(res => setContent(res.data));
	} , []);

	return (
		<Layout>
			<ReactMarkdown
				components={ChakraUIRenderer({
					img: (props) => (
						<Box display="inline-block">
							<img {...props} />
						</Box>
					),
				})}
				children={content}
				skipHtml
			/>
		</Layout>
	);
}
