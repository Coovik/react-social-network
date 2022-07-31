import profileReducer, { addPost, deletePost } from "./profile-reducer"

let state = {
   postsName: [
      { name: 'some post 1' },
      { name: 'some post 2' },
      { name: 'some post 3' },
      { name: 'some post 4' },
   ],
}

it('new post should added', () => {
   let action = addPost('new post')
   let newState = profileReducer(state, action)
   expect(newState.postsName.length).toBe(5)
})
it('number of posts should be decrease', () => {
   let action = deletePost(2)
   let newState = profileReducer(state, action)
   expect(newState.postsName.length).toBe(3)
})