import { Text } from '@chakra-ui/react';
import Layout from '../../components/common/Layout';
import { getFiles } from '../../lib/getFiles';

export default function Blogs() {
	const files = getFiles('.', 'md');
	console.log(files);

	return (
		<Layout>
			<Text>Coming Soon</Text>
		</Layout>
	);
}
