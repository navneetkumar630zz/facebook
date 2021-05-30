import AddPost from './AddPost';
import Stories from './Stories';
import Posts from './Posts';

const Feed = ({ user }) => {
	return (
		<div className="Feed">
			<style jsx>{`
				.Feed {
					width: 59rem;
				}
				@media only screen and (max-width: 900px) {
					.Feed {
						width: min(100%, 59rem);
					}
				}
			`}</style>
			<Stories />
			<AddPost user={user} />
			<Posts />
		</div>
	);
};

export default Feed;
