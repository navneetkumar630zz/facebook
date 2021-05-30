import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../../firebase';
import Loader from '../../../common-utils/Loader';
import Post from './Post';

const Posts = () => {
	const [posts, loading, error] = useCollection(
		db.collection('posts').orderBy('timestamp', 'desc')
	);

	if (loading) return <Loader />;
	return (
		<div>
			{posts?.docs.map(post => (
				<Post key={post.id} post={post.data()} />
			))}
		</div>
	);
};

export default Posts;
