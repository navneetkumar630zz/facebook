import classNames from 'classnames';
import { signIn } from 'next-auth/client';
import { FaFacebook } from 'react-icons/fa';
import style from './style.module.scss';

const Login = () => {
	return (
		<div className={classNames(style.login, 'grid-center')}>
			<div className="grid-center">
				<div className={style.logo}>
					<FaFacebook />
				</div>
				<button className={style.login_btn} onClick={signIn}>
					Login with Facebook
				</button>
			</div>
		</div>
	);
};

export default Login;
