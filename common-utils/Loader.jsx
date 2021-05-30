const Loader = () => {
	return (
		<div className="loader">
			<style jsx>{`
				.loader {
					min-height: 90vh;
					display: grid;
					place-items: center;
				}
				span {
					display: inline-block;
					width: 1rem;
					height: 1rem;
					margin: 0.5rem;
					background: var(--primary);
					border-radius: 50%;
					animation: growshrink 0.5s linear infinite alternate;
					animation-delay: calc(0.2s * var(--n));

					@keyframes growshrink {
						from {
							width: 1rem;
							height: 1rem;
							opacity: 0.5;
							margin: 0.5rem;
						}
						to {
							width: 3rem;
							height: 3rem;
							opacity: 1;
							margin: 0.5rem 1rem;
						}
					}
				}
			`}</style>
			<div>
				<span style={{ '--n': 1 }} />
				<span style={{ '--n': 2 }} />
				<span style={{ '--n': 3 }} />
			</div>
		</div>
	);
};

export default Loader;
