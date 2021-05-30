import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import {
	HiBell,
	HiChat,
	HiChevronDown,
	HiHome,
	HiOutlineCog,
	HiOutlineFlag,
	HiOutlineLogout,
	HiOutlinePlay,
	HiOutlineSearch,
	HiOutlineShoppingCart,
	HiOutlineUser,
	HiOutlineUserGroup,
	HiViewGrid,
} from 'react-icons/hi';
import AvatarImage from '../../common-utils/AvatarImage';
import NavItem from './NavItem';
import style from './style.module.scss';
import { signOut } from 'next-auth/client';

const Header = ({ user }) => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(pre => !pre);

	return (
		<header className={style.header}>
			<div className="left">
				<div className={style.logo}>
					<FaFacebook />
				</div>
				<div className={style.search}>
					<HiOutlineSearch />
					<input type="text" placeholder="Search Facebook" />
				</div>
			</div>
			<nav className={style.center}>
				<NavItem Icon={HiHome} active />
				<NavItem Icon={HiOutlineFlag} />
				<NavItem Icon={HiOutlinePlay} />
				<NavItem Icon={HiOutlineShoppingCart} />
				<NavItem Icon={HiOutlineUserGroup} />
			</nav>
			<div className={style.right}>
				<AvatarImage style={{ marginRight: '1rem' }} onClick={toggleMenu} />
				<span className="name">{user.name}</span>
				<div className="option">
					<span className="icon" tabIndex="0">
						<HiViewGrid />
					</span>
				</div>
				<div className="option">
					<span className="icon" tabIndex="0">
						<HiChat />
					</span>
				</div>
				<div className="option">
					<span className="icon" tabIndex="0">
						<HiBell />
					</span>
				</div>
				<div className="option">
					<span
						className="icon"
						onClick={toggleMenu}
						tabIndex="0"
						onKeyPress={e => e.key === 'Enter' && toggleMenu()}
					>
						<HiChevronDown />
					</span>
				</div>
			</div>
			{isMenuOpen && (
				<>
					<div className={style.menu_mask} onClick={toggleMenu} aria-hidden />
					<ul className={style.menu}>
						<li className={style.menu_item}>
							<HiOutlineUser />
							<span>Profile</span>
						</li>
						<li className={style.menu_item}>
							<HiOutlineCog />
							<span>Settings</span>
						</li>
						<li className={style.menu_item} onClick={signOut}>
							<HiOutlineLogout />
							<span>Logout</span>
						</li>
					</ul>
				</>
			)}
		</header>
	);
};

export default Header;
