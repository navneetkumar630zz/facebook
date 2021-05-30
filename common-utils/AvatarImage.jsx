import { useSession } from 'next-auth/client';
import Image from 'next/image';

const AvatarImage = ({ src, ...restProps }) => {
	const [session] = useSession();

	return (
		<div {...restProps} className={`circle-avatar ${restProps?.className}`}>
			<Image
				src={src || session?.user.image}
				alt="user avatar"
				width={35}
				height={35}
				layout="fixed"
			/>
		</div>
	);
};

export default AvatarImage;
