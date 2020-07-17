import React, {useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button } from 'native-base';
import {Context} from './context/BlogContext';

const CreateScreen = ({navigation}) => {

	const submitAndClear = () => {
	  this.props.writeText(this.state.text)
	  this.setState({
	    title: ''
	  })
	}

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const {addPost} = useContext(Context);

	return(
		<View style = {styles.viewStyle}>

			<Text style={styles.createStyle}>Create Note </Text>

			<View style = {styles.viewStyle2}>
				<Text style = {styles.titleHead}>Enter Title: </Text>
				<TextInput
					style = {styles.titleStyle}
					value = {title}
					onChangeText = {(text) => setTitle(text)}
				/>

				<Text style = {styles.contentHead}>Enter Content: </Text>
				<TextInput 
					style = {styles.contentStyle}
					value = {content}
					onChangeText = {(text) => setContent(text)}
				/>

				<Button
					title = "Add Post"
					style = {styles.buttonStyle}
					onPress = {() => {addPost(title,content, ()=> {
							navigation.navigate('IndexScreen');
						});
					}}
				>
				<Text style = {styles.buttonTitle}>Add Note</Text>
				</Button>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	viewStyle:{
		flex: 1,
		backgroundColor: '#fdf289',
	},

	createStyle:{
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		backgroundColor: '#086972',
		padding: 10,
		color:'white',
	},

	viewStyle2:{
		padding: 10,
	},

	titleHead:{
		fontSize: 20,
		fontWeight: 'bold',
	},

	titleStyle: {
		borderWidth: 2,
		borderColor: 'black',
		backgroundColor: 'white',
		marginBottom: 20,
		padding: 5,
	},

	contentHead:{
		fontSize: 20,
		fontWeight: 'bold',
	},

	contentStyle: {
		borderWidth: 2,
		borderColor: 'black',
		backgroundColor: 'white',
		minHeight: 200,
		textAlignVertical: 'top',
		marginBottom: 20,
		padding: 5,
	},

	buttonStyle:{
		marginRight: 50,
		marginLeft: 50,
		backgroundColor: '#086972',
		color: 'white',
		justifyContent: 'center',
	},

	buttonTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
});

export default CreateScreen;
