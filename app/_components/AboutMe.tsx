import Image from 'next/image';

import bryanJpg from '@/public/bryan.jpg';

const AboutMe = () => {

	return (
		<div
			className="grid grid-cols-12 grid-rows-6"
			id="aboutme"
		>
			<div className="col-start-1 col-span-8 row-start-1 row-span-6 pt-10">
				<h3 className="text-5xl font-bold mb-14">About me</h3>
				<div className="p-8 border border-slate-100 bg-white/50 backdrop-blur-lg drop-shadow-lg rounded-2xl relative z-20">
					<h2 className="text-2xl font-semibold mb-9">Who is Bryan?</h2>
					<p className="text-base mb-8">
						Hello! I&apos;m Bryan Berger, a 25 years old web developer from France. I&apos;m currently studying at <a
							href="https://www.epitech.eu/fr/"
							rel="noopener noreferrer"
							target="_blank"
						                                                                                                       >Epitech
                                                                                                             </a> in Paris.
						I&apos;m passionate about web development and I love to learn new things.
						I&apos;m a very curious person and I like to discover new technologies.
						I&apos;m also a gamer, I love to play video games with my friends.
						I&apos;m a very social person and I love to meet new people.
					</p>
					<p className="text-base">
						Hello! I&apos;m Bryan Berger, a 25 years old web developer from France. I&apos;m currently studying at <a
							href="https://www.epitech.eu/fr/"
							rel="noopener noreferrer"
							target="_blank"
						                                                                                                       >Epitech
                                                                                                             </a> in Paris.
						I&apos;m passionate about web development and I love to learn new things.
						I&apos;m a very curious person and I like to discover new technologies.
						I&apos;m also a gamer, I love to play video games with my friends.
						I&apos;m a very social person and I love to meet new people.
					</p>
				</div>
			</div>
			<div className="col-start-8 col-span-4 row-start-1 row-span-5">
				<div className="w-fit h-fit rounded-2xl drop-shadow-lg">
					<Image
						alt="Bryan Berger"
						className="rounded-2xl relative z-10"
						height={ 400 }
						src={ bryanJpg }
						width={ 400 }
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;