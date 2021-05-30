import style from './style.module.scss';
import cn from 'classnames';

const NavItem = ({ Icon, active }) => {
	return (
		<a href="#" className={cn(style.nav_item, active && style.active)}>
			<Icon />
		</a>
	);
};

export default NavItem;
