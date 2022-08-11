import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface NavbuttonProps {
	label: string;
	path: string;
}

export default function Navbutton({ label, path }: NavbuttonProps) {
	return (
		<Link to={path}>
			<Button
				width={{ base: "full", lg: "auto" }}
				py={{ base: 5, lg: 10 }}
				size="lg"
				background="transparent"
				fontSize="xl"
				fontWeight="medium"
				borderRadius="none"
				_hover={{
					backgroundColor: "black",
					color: "white",
				}}
			>
				{label}
			</Button>
		</Link>
	);
}
