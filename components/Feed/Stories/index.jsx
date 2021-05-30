import Story from './Story';
import storyList from './story-list';
import style from './style.module.scss';

const Stories = () => {
	return (
		<div className={style.stories_container}>
			{storyList.map((story, ind) => (
				<Story key={ind} {...story} />
			))}
		</div>
	);
};

export default Stories;
