import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from './context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';
import {AppLoading} from 'expo';
import { useFonts, Changa_400Regular } from '@expo-google-fonts/changa';

const ShowScreen = ({navigation}) => {

	let [fontsLoaded] = useFonts({
	    Changa_400Regular,
	  });

	if (!fontsLoaded) {
    return <AppLoading />;
  }

	const {state} = useContext(Context);
	const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

	return(
		<View style = {styles.viewStyle}>
			<Text style = {styles.titleStyle}>{blogPost.title}</Text>
			<View>
				<Text style = {styles.contentStyle}>{blogPost.content}</Text>
			</View>
		</View>
	);
};

ShowScreen.navigationOptions = ({navigation}) => {
	return {
		headerRight: (
			<TouchableOpacity onPress={() => navigation.navigate('EditScreen', {id: navigation.getParam('id')})}>
				<EvilIcons name="pencil" size={30} />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		backgroundColor: '#fdf289',
	},

	titleStyle:{
		fontSize: 24,
		backgroundColor: '#DDAD60',
		color: 'white',
		fontWeight: 'bold',
		padding: 10,
	},

	contentStyle:{
		fontSize: 16,
		padding: 10,
		fontFamily: 'Changa_400Regular',
		backgroundColor: 'white',
		marginTop: 15,
		marginRight: 10,
		marginLeft: 10,
		marginBottom: 10,
	},
});

export default ShowScreen;