import { HiVideoCamera, HiOutlineSearch, HiOutlineDotsHorizontal } from 'react-icons/hi';
import AvatarImage from '../../common-utils/AvatarImage';
import style from './style.module.scss';

const contactList = [
	{ name: 'Jeff Bezoz', src: 'https://links.papareact.com/f0p' },
	{ name: 'Elon Musk', src: 'https://links.papareact.com/kxk' },
	{ name: 'Bill Gates', src: 'https://links.papareact.com/zvy' },
	{ name: 'Marj Zukerberg', src: 'https://links.papareact.com/snf' },
	{ name: 'Harry Potter', src: 'https://links.papareact.com/d0c' },
	{ name: 'The Queen', src: 'https://links.papareact.com/6gg' },
	{ name: 'James Bond', src: 'https://links.papareact.com/r57' },
];

const Contact = ({ src, name }) => (
	<div className={style.contact}>
		<AvatarImage src={src} />
		<span>{name}</span>
	</div>
);

const Contacts = () => {
	return (
		<div className={style.contacts}>
			<div className={style.top}>
				<h2>Contacts</h2>
				<div className={style.icons}>
					<HiVideoCamera />
					<HiOutlineSearch />
					<HiOutlineDotsHorizontal />
				</div>
			</div>
			<div>
				{contactList.map(({ src, name }) => (
					<Contact src={src} name={name} />
				))}
			</div>
		</div>
	);
};

export default Contacts;
