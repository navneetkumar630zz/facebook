import { useSession } from 'next-auth/client';
import Head from 'next/head';
import Loader from '../common-utils/Loader';
import Contacts from '../components/Contacts';
import Feed from '../components/Feed';
import Login from '../components/Login';
import Header from '/components/Header';
import Sidebar from '/components/Sidebar';

const Home = () => {
	const [session, loading] = useSession();

	if (loading) return <Loader />;
	if (!session) return <Login />;
	return (
		<div className="App">
			<Head>
				<title>Facebook</title>
			</Head>
			<Header user={session.user} />
			<main>
				<Sidebar user={session.user} />
				<Feed user={session.user} />
				<Contacts />
			</main>
		</div>
	);
};

export default Home;
