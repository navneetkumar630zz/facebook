import Image from 'next/image';
import { HiOutlineChatAlt, HiOutlineShare, HiOutlineThumbUp } from 'react-icons/hi';
import AvatarImage from '../../../../common-utils/AvatarImage';
import style from './style.module.scss';

const Post = ({ post }) => {
	const { name, email, image, message, postImage, timestamp } = post;

	return (
		<div className={style.post}>
			<div className={style.user_details}>
				<AvatarImage src={image} />
				<div className={style.name_and_timestamp}>
					<span className={style.name}>{name}</span>
					<span className={style.timestamp}>{new Date(timestamp?.toDate()).toLocaleString()}</span>
				</div>
			</div>
			<div className={style.message}>{message}</div>
			{postImage && (
				<div className={style.image}>
					<img src={postImage} alt="post" />
				</div>
			)}
			<div className={style.option_container}>
				<div className={style.option}>
					<HiOutlineThumbUp />
					<span>Like</span>
				</div>
				<div className={style.option}>
					<HiOutlineChatAlt />
					<span>Comment</span>
				</div>
				<div className={style.option}>
					<HiOutlineShare />
					<span>Share</span>
				</div>
			</div>
		</div>
	);
};

export default Post;
