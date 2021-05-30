import { useRef, useState } from 'react';
import firebase from 'firebase';
import { HiCamera, HiOutlineEmojiHappy, HiVideoCamera, HiXCircle } from 'react-icons/hi';
import { db, storage } from '../../../firebase';
import AvatarImage from '../../../common-utils/AvatarImage';
import style from './style.module.scss';

const AddPost = ({ user }) => {
	const [message, setMessage] = useState(null);
	const [image, setImage] = useState(null);
	const imageRef = useRef(null);

	const addImage = e => {
		if (!e.target.files[0]) return;
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = readEvent => {
			setImage(readEvent.target.result);
		};
	};

	const removeImage = () => {
		setImage(null);
		imageRef.current.value = null;
	};

	const sendPost = e => {
		e.preventDefault();
		if (!message) return;

		db.collection('posts')
			.add({
				message,
				name: user.name,
				email: user.email,
				image: user.image,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then(doc => {
				setMessage(null);
				if (!image) return;
				// Upload the image to firebase cloud storage
				const uploadTask = storage.ref(`posts/${doc.id}`).putString(image, 'data_url');
				removeImage();
				uploadTask.on('state_change', null, console.error, () => {
					// When the upload successfully completed, add the image url to database
					storage
						.ref('posts')
						.child(doc.id)
						.getDownloadURL()
						.then(url => {
							db.collection('posts').doc(doc.id).set(
								{
									postImage: url,
								},
								{ merge: true }
							);
						});
				});
			});
	};

	return (
		<div className={style.addPost}>
			<div>
				<AvatarImage />
				<form onSubmit={sendPost}>
					<input
						type="text"
						placeholder={`What's on your mind, ${user.name}`}
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
					<button type="submit" disabled={!message}>
						Post
					</button>
				</form>
			</div>
			{image && (
				<div className={style.image}>
					<HiXCircle onClick={removeImage} />
					<img src={image} alt="post image preview" />
				</div>
			)}
			<div className={style.options}>
				<div tabIndex="0">
					<HiVideoCamera />
					<span>Live Video</span>
				</div>
				<label tabIndex="0">
					<HiCamera />
					<span>Photo/Video</span>
					<input type="file" accept="image/*" ref={imageRef} onChange={addImage} />
				</label>
				<div tabIndex="0">
					<HiOutlineEmojiHappy />
					<span>Feeling/Activity</span>
				</div>
			</div>
		</div>
	);
};

export default AddPost;
