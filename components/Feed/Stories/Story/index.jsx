import classNames from 'classnames';
import Image from 'next/image';
import style from './style.module.scss';

const Story = ({ name, avatar, src }) => {
	return (
		<div className={style.card}>
			<div className={classNames(style.avatar, 'circle-avatar')}>
				<Image width={30} height={30} layout="fixed" src={avatar} alt="user avatar" />
			</div>
			<div className={style.name}>{name}</div>
			<div className={style.img}>
				<Image src={src} alt="user story" width={110} height={170} objectFit="cover" />
			</div>
		</div>
	);
};

export default Story;
