import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type){
		case 'add_blog':
			return [...state, 
				{
					id: Math.floor(Math.random() * 9999),
					title: action.payload.title,
					content: action.payload.content,
				}
			];

			case 'delete_blog':
				return state.filter(post => post.id !== action.toDelete);

			case 'edit_blog':
				return state.map((blogPost) => {
					if(blogPost.id === action.payload.id){
						return action.payload;
					}
					else{
						return blogPost;
					}
				});

		default: 
			return state;
	}
};

const addPost = dispatch => {
	return (title, content, callback) => {
		dispatch({type: 'add_blog', payload:{title: title, content: content}});
		callback();
	};
};

const deletePost = dispatch => {
	return(id) => {
		dispatch({type: 'delete_blog', toDelete: id});
	}
};

const editPost = dispatch => {
	return (id, title, content,callback) => {
			 dispatch({type: 'edit_blog', payload: {id: id, title: title, content: content}
		});
		if(callback){
			callback();
		}
	};
};

export const {Context, Provider} = createDataContext(
		blogReducer,
		{addPost, deletePost, editPost},
		[{title: 'TEST TITLE', content: 'TEST CONTENT', id: 1}]
	);