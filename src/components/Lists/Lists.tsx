import { memo } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface Props {
	title: string;
	items: number[];
};

export const Lists = memo(<T extends Props>({title, items}: T): JSX.Element => {
  return (
		<div>
			<h1>{title}</h1>
			<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
					position: 'relative',
					overflow: 'auto',
					maxHeight: 300,
					'& ul': { padding: 0 },
				}}
			>
				{
					items.map((item, index) => (
						<ListItem key={index}>
							<ListItemText primary={item} />
						</ListItem>
					))
				}
			</List>
		</div>
  );
});