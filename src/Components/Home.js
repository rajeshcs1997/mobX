import React, {useState} from 'react'
import { observer } from "mobx-react-lite"
import { styles } from "./styles"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Home = ({store}) => {
	const classes = useStyles();
	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");

	const handleNameChange = (e) =>{
		setName(e.target.value)
	}

	const handleSubjectChange = (e) =>{
		setSubject(e.target.value)
	}

	const changeName = () =>{
		name && store.updateUser(name)
		setName("")
	}
	const changeSubject = () =>{
		subject && store.addSubject(subject)
		setSubject("")
	}
	console.log("bbdm",name)
	return(
		<div>
			<h1 style={{color: '#303f9f'}}>mobX</h1>
			<TextField
				id="outlined-basic"
				label="Name"
				variant="outlined"
				size="small"
				value={name}
				onChange={handleNameChange} />
			<Button  style={{marginLeft: '20px'}} variant="contained" color="primary" onClick={()=>changeName()}>Update</Button>
			<p style={{fontSize: '22px', color: 'dodgerblue'}}>Id: <span style={{color: 'cornflowerblue'}}>{store.userInfo.id}</span></p>
			<p style={{marginBottom: '50px', fontSize: '22px', color: 'dodgerblue'}}>Name:  <span style={{color: 'cornflowerblue'}}>{store.userInfo.name}</span></p>
			<TextField
				id="outlined-basic"
				label="Subject"
				variant="outlined"
				size="small"
				value={subject}
				onChange={handleSubjectChange} />
			<Button style={{marginLeft: '20px'}} variant="contained" color="primary" onClick={()=>changeSubject()}>Add</Button>
			<p style={{fontSize: '20px', color: 'dodgerblue'}}>Total subjects: <span style={{color: 'cornflowerblue'}}>{store.userInfo.subject.length}</span></p>
			{store.userInfo.subject && store.userInfo.subject.map((res)=><p style={{fontSize: '18px', color: 'cornflowerblue'}}>{res}</p>)}
		</div>
	)
}

export default observer(Home);