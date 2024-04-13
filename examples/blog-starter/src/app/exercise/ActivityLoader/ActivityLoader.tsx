import React from 'react';
import Classes from './ActivityLoader.module.scss';

type ActivityLoaderProps = {
	isLoading: boolean;
};

export const ActivityLoader = ({ isLoading }: ActivityLoaderProps) => {
	return (
		<>
			{isLoading ? (
				<div className={Classes['loader-container']}>
					<div className={Classes['loader']}></div>
					Loading.....
				</div>
			) : null}
		</>
	);
};
