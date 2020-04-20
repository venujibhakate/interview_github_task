import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Styles = theme => ({
	mainContainer: {
		display: "flex",
		marginLeft: '20%',
	},
	image: {
		width: '25ch',
	},
	content: {
		width: '22ch'
	},
	btn: {
		width: '25ch'
	},
	root: {
		width: '50ch',
		marginLeft: '30%',
		margin: theme.spacing(2),
		padding: theme.spacing(4)
	},
	text: {
		margin: theme.spacing(2),
	},
	repoInfo: {
		display: "flex",
	},
	starCount: {
		backgroundColor: '#eff3f6',
		color: '#24292e',
		padding: '3px 10px 3px 10px',
	},
	forkCount: {
		backgroundColor: '#eff3f6',
		color: '#24292e',
		marginLeft: '2px',
		padding: '3px 10px 3px 10px'
	},
	watchersCount: {
		backgroundColor: '#eff3f6',
		color: '#24292e',
		marginLeft: '2px',
		padding: '3px 10px 3px 10px'
	}
})

function Profile(props) {
	const { profile, classes, Repos } = props;
	// const{classes}= this.props
	return (

		<div className={classes.mainContainer}>
			<div>
				{profile.map(profile => (
					<Card key="id" className={classes.image}>
						<CardContent>
						<img className={classes.content} alt="thumbnail" src={profile.avatar_url} />
							<a href={profile.html_url} style={{ textDecoration: 'none' }}>
								<Button
									variant="contained" className={classes.btn}>
									View Profile
								</Button>
							</a>
							<Typography >{profile.login}</Typography>
							<Typography style={{ color: '#666' }}>{profile.login}</Typography>
						</CardContent>

					</Card>

				))}
			</div>
			<div className="cardDiv">
				{Repos.map(repo => (
					<Card className={classes.root}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								<a
									href={repo.html_url}
									style={{ fontSize: '15px', textDecoration: 'none', display: 'table-cell' }}
									target="_blank"
									rel="noopener noreferrer">
									{repo.name}

								</a>
								<Typography>
									<a
										href={repo.html_url}
										target="_blank"
										style={{ fontSize: '15px', textDecoration: 'none'}}
										rel="noopener noreferrer">
										{repo.full_name}
									</a>
								</Typography>
								<div className={classes.text}>
									<Typography style={{ fontSize: '13px', }}>{repo.description}</Typography>
									<Typography style={{ fontSize: '15px', display: 'inline-block', marginTop: '4%' }}>{repo.language}</Typography>
								</div>
								<div className={classes.repoInfo}>
									<span className={classes.starCount}>
										{repo.stargazers_count}Star
								</span>
									<span className={classes.forkCount}>
										{repo.forks_count}Fork
								</span>
									<span className={classes.watchersCount}>
										{repo.watchers_count}Watchers
								</span>
								</div>
							</Typography>
						</CardContent>
					</Card>

				))}
			</div>
		</div>

	);
}

export default (withStyles)(Styles)(Profile);
