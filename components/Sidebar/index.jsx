import AvatarImage from '../../common-utils/AvatarImage';
import contents from './contents';
import style from './style.module.scss';

const SidebarItem = ({ icon, label }) => (
	<li>
		<a href="#" className={style.sidebar_item}>
			<div className={style.icon}>{icon}</div>
			<div className={style.label}>{label}</div>
		</a>
	</li>
);

const Sidebar = ({ user }) => {
	return (
		<aside className={style.sidebar}>
			<nav>
				<ul>
					<SidebarItem icon={<AvatarImage />} label={user.name} />
					{contents.map(({ icon, label }) => (
						<SidebarItem key={label} icon={icon} label={label} />
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
