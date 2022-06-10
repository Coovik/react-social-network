let renderTree = () => { }


let data = {
   profilePage: {
      postsName: [
         { name: 'some post 1' },
         { name: 'some post 2' },
         { name: 'some post 3' },
         { name: 'some post 4' }
      ],
      newPostText: ''
   },
   dialogsPage: {
      dialogs: [
         { id: '1', name: 'Oleg' },
         { id: '2', name: 'Danya' },
         { id: '3', name: 'Maksim' },
         { id: '4', name: 'Valera' },
      ],
      messages: [
         { id: '1', message: 'Hello!' },
         { id: '2', message: 'How are you?' },
         { id: '3', message: 'What do you do?' },
         { id: '4', message: 'Bye' },
      ]
   },
};


export const addPost = () => {
   let post = { name: data.profilePage.newPostText }
   data.profilePage.postsName.push(post)
   data.profilePage.newPostText = ''
   renderTree(data)
}

export const updateNewPostText = (newText) => {
   data.profilePage.newPostText = newText
   renderTree(data)
}

export const subscribe = (observer) => {
   renderTree = observer
}

export default data