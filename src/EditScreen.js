import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import {Button} from 'native-base';
import {Context} from './context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

const EditScreen = ({navigation}) => {
	const {state, editPost} = useContext(Context);
	const id = navigation.getParam('id');
	const blogPost = state.find((blogPost) => blogPost.id ===id);
	const [title, setTitle] = useState(blogPost.title);
	const [content, setContent] = useState(blogPost.content);


	return(
		<View style = {styles.viewStyle}>

			<Text style={styles.updateStyle}>Update Note </Text>

			<View style = {styles.viewStyle2}>
				<Text style = {styles.titleHead}>Update Title: </Text>
				<TextInput 
					style = {styles.titleStyle}
					value = {title}
					onChangeText = {(newTitle) => setTitle(newTitle)}
				/>
				<Text style = {styles.contentHead}>Update Content: </Text>
				<TextInput 
					style = {styles.contentStyle}
					value = {content}
					onChangeText = {(newTitle) => setContent(newTitle)}
				/>

				<Button
					style = {styles.buttonStyle}
					onPress = {() => {editPost(id,title,content, 
						() => navigation.pop());
					}}
				>
					<Text style = {styles.buttonTitle}>Update Post</Text>
				</Button>
			</View>

		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle:{
		flex: 1,
		backgroundColor: '#fdf289',
	},

	viewStyle2:{
		padding: 10,
	},

	updateStyle:{
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		backgroundColor: '#FA7D09',
		padding: 10,
		color:'white',
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
		backgroundColor: '#FA7D09',
		color: 'white',
		justifyContent: 'center',
	},

	buttonTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
});

export default EditScreen;