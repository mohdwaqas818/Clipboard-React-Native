import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from './context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
	const {state, addPost, deletePost} = useContext(Context);

	return(
		<View style = {styles.viewStyle}>
			<FlatList 
				data={state}
				keyExtractor = {(val) => val.title}
				renderItem = {({item}) => {
					return(
						<View>
							<TouchableOpacity onPress={() => navigation.navigate('ShowScreen', {id: item.id})}>
									<View style = {styles.titleStyle}>						
										<Text style={styles.textStyle}>{item.title}</Text>
											<Feather 
												style={styles.icon} name="trash"
												onPress={() => deletePost(item.id)}
											/>		
									</View>
								</TouchableOpacity>
							</View>

					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({navigation}) => {
	return {
		headerRight: (
			<TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
				<Feather name="plus-circle" size={30} />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	viewStyle:{
		flex: 1,
		backgroundColor: '#fdf289',
	},

	titleStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 3,
		borderColor: 'black',
		padding: 10,
		backgroundColor: '#ed553b',
		marginTop: 2,
		marginBottom: 2,
	},

	icon:{
		fontSize: 30,
		color: 'white',
		fontWeight: 'bold',
	},

	textStyle: {
		fontSize: 25,
		color: 'white',
		fontWeight: 'bold',
	}
});

export default IndexScreen;