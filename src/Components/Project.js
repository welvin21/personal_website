import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Tag, notification } from 'antd';
import 'antd/dist/antd.css'; 

const useStyles = makeStyles( theme => ({
  picture: {
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  buttons: {
    marginBottom: 10,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: 10
  }
}));

const identifyTag = tag => {
  const languages = ['python','javascript','java','c++'];
  const libraries = ['react','react-native','express','redux'];
  const clouds = ['firebase','AWS','azure'];

  let color = 'magenta';
  if(languages.includes(tag)){
    color = 'blue';
  }else if(libraries.includes(tag) || tag.toLowerCase().includes('api')){
    color = 'green';
  }else if(clouds.includes(tag)){
    color = 'orange';
  }
  return <Tag key={tag} className='tag' color={color}>{tag}</Tag>;
};

const openMessage = () => {
  notification.error({
    message: 'Code is not available for this project.',
    description: 'Please kindly check my other projects!'
  });
}

const Project = ({ project : {pic, title, desc, url, github, tags}}) => {
  const classes = useStyles();
  return(
    <div className='project-card'>
      <div>
        <img className={classes.picture} src={pic} alt={title}/>
      </div>
      <div style={{padding: '0px 10px'}}>
        <div style={{paddingTop: 10}}>
          {tags.map(tag => identifyTag(tag))}
        </div>
        <h2 style={{color: '#4d4d4d',marginBottom: 0}}>{title}</h2>
        <p style={{paddingBottom: 10,marginTop: 5}}>{desc}</p>
        <div className={classes.buttons}>
          <Button 
            variant='outlined' 
            color="primary" 
            size='small'
            disableElevation 
            style={{fontSize: 'min(100%, 16px)'}}
            onClick={() => {window.open(url,'_blank','noopener')}}
          >
            See more
          </Button>
          <Button 
            variant='outlined' 
            size='small'
            disableElevation
            startIcon={<GitHubIcon/>}
            style={{fontSize: 'min(100%, 16px)'}}
            onClick={() => { github ? window.open(github,'_blank','noopener') : openMessage() }}
          >
            Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Project;