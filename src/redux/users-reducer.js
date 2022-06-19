const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let intialState = {
   users: [
      //    { id: '1', followed: true, name: 'Oleg', status: "i'm big boss", location: { country: 'Russian', city: 'Moscow' }, photo: 'https://lh3.googleusercontent.com/kUTchjyD0AADHT4NHnV1N4OIVU4QSrdwLQxsgsl_eKEqBBNfJEBvF5o3hphTaHbp0IfZ4BYSxUN-RHaFzMTSixQco8QJOYrxe5Pe4HZ1n3xVstraUoqIfwuMPc3HBYancTPQAN05IJJ_zmy8wzZ5n-vWKeGEQK0z7hmEXK7rF_9o5zeVYnzQadDH4jnUZMbcdaR6ZJ5gktkbzyUwPru4bpUJGAiwsA-c2lK37kxspFSfEypFM5DqJDVoYYSp25nCLSQOxM6JB7yQ6o4q3RcuTqCOMgtlq7aYBqXQKMZ3-qT2sSy3RKV-13p4yaAw-IhEnpAwGd06OxJAXOpHOTaDEXdQcEuGFXs03jVQlvxWLMpvEGN3euYutFKuvXdxMLB4QEBvsSYnUza192ugalMwPh0iNs2NeLHI7V3NwbS4-rP8uy1EFseQUeLVt_vrrlezszFZhPyPk52qUoTt96x70dPGSdSIzzKEdr-PMxOe1a88QDqmBU3OAt_BVLImaNjf1V4bicEHMDWcRRt_4m8afWjfuRGh2nkaGy6dVW-w0hi3JjQo81qM9QJ7oM7dySrZ4cR4Z6qomxnlBZdfImbQ57P5PNuK4_DTOrO5rQ0U4jCH0G5W2EGq_DoIdmNt6KUo8zTMIFkOjkwgRYGVijJD-RL1Cx8_RbWb1Bu8UfkWSVnkaLZcBxgYfXNxu-MCS1_0B4PcJfFdsnCNDwKxujm0LIs4WAPxphoTNsWDL1NcvfxNK22nkJtMa7eibP7zySL6Pj9p5JyAJoYyUL6q4y-_qAwUG87fswf_81FYxoeIG2g2fVOfhf_XcgLHkSFdWMnJNO0=w512-h505-no?authuser=0' },
      //    { id: '2', followed: false, name: 'Danya', status: "i'm big boss too", location: { country: 'Russian', city: 'Moscow' }, photo: 'https://lh3.googleusercontent.com/kUTchjyD0AADHT4NHnV1N4OIVU4QSrdwLQxsgsl_eKEqBBNfJEBvF5o3hphTaHbp0IfZ4BYSxUN-RHaFzMTSixQco8QJOYrxe5Pe4HZ1n3xVstraUoqIfwuMPc3HBYancTPQAN05IJJ_zmy8wzZ5n-vWKeGEQK0z7hmEXK7rF_9o5zeVYnzQadDH4jnUZMbcdaR6ZJ5gktkbzyUwPru4bpUJGAiwsA-c2lK37kxspFSfEypFM5DqJDVoYYSp25nCLSQOxM6JB7yQ6o4q3RcuTqCOMgtlq7aYBqXQKMZ3-qT2sSy3RKV-13p4yaAw-IhEnpAwGd06OxJAXOpHOTaDEXdQcEuGFXs03jVQlvxWLMpvEGN3euYutFKuvXdxMLB4QEBvsSYnUza192ugalMwPh0iNs2NeLHI7V3NwbS4-rP8uy1EFseQUeLVt_vrrlezszFZhPyPk52qUoTt96x70dPGSdSIzzKEdr-PMxOe1a88QDqmBU3OAt_BVLImaNjf1V4bicEHMDWcRRt_4m8afWjfuRGh2nkaGy6dVW-w0hi3JjQo81qM9QJ7oM7dySrZ4cR4Z6qomxnlBZdfImbQ57P5PNuK4_DTOrO5rQ0U4jCH0G5W2EGq_DoIdmNt6KUo8zTMIFkOjkwgRYGVijJD-RL1Cx8_RbWb1Bu8UfkWSVnkaLZcBxgYfXNxu-MCS1_0B4PcJfFdsnCNDwKxujm0LIs4WAPxphoTNsWDL1NcvfxNK22nkJtMa7eibP7zySL6Pj9p5JyAJoYyUL6q4y-_qAwUG87fswf_81FYxoeIG2g2fVOfhf_XcgLHkSFdWMnJNO0=w512-h505-no?authuser=0' },
      //    { id: '3', followed: true, name: 'Maksim', status: "i'm big boss too", location: { country: 'Russian', city: 'Moscow' }, photo: 'https://lh3.googleusercontent.com/kUTchjyD0AADHT4NHnV1N4OIVU4QSrdwLQxsgsl_eKEqBBNfJEBvF5o3hphTaHbp0IfZ4BYSxUN-RHaFzMTSixQco8QJOYrxe5Pe4HZ1n3xVstraUoqIfwuMPc3HBYancTPQAN05IJJ_zmy8wzZ5n-vWKeGEQK0z7hmEXK7rF_9o5zeVYnzQadDH4jnUZMbcdaR6ZJ5gktkbzyUwPru4bpUJGAiwsA-c2lK37kxspFSfEypFM5DqJDVoYYSp25nCLSQOxM6JB7yQ6o4q3RcuTqCOMgtlq7aYBqXQKMZ3-qT2sSy3RKV-13p4yaAw-IhEnpAwGd06OxJAXOpHOTaDEXdQcEuGFXs03jVQlvxWLMpvEGN3euYutFKuvXdxMLB4QEBvsSYnUza192ugalMwPh0iNs2NeLHI7V3NwbS4-rP8uy1EFseQUeLVt_vrrlezszFZhPyPk52qUoTt96x70dPGSdSIzzKEdr-PMxOe1a88QDqmBU3OAt_BVLImaNjf1V4bicEHMDWcRRt_4m8afWjfuRGh2nkaGy6dVW-w0hi3JjQo81qM9QJ7oM7dySrZ4cR4Z6qomxnlBZdfImbQ57P5PNuK4_DTOrO5rQ0U4jCH0G5W2EGq_DoIdmNt6KUo8zTMIFkOjkwgRYGVijJD-RL1Cx8_RbWb1Bu8UfkWSVnkaLZcBxgYfXNxu-MCS1_0B4PcJfFdsnCNDwKxujm0LIs4WAPxphoTNsWDL1NcvfxNK22nkJtMa7eibP7zySL6Pj9p5JyAJoYyUL6q4y-_qAwUG87fswf_81FYxoeIG2g2fVOfhf_XcgLHkSFdWMnJNO0=w512-h505-no?authuser=0' },
      //    { id: '4', followed: true, name: 'Valera', status: "i'm big boss too", location: { country: 'Russian', city: 'Moscow' }, photo: 'https://lh3.googleusercontent.com/kUTchjyD0AADHT4NHnV1N4OIVU4QSrdwLQxsgsl_eKEqBBNfJEBvF5o3hphTaHbp0IfZ4BYSxUN-RHaFzMTSixQco8QJOYrxe5Pe4HZ1n3xVstraUoqIfwuMPc3HBYancTPQAN05IJJ_zmy8wzZ5n-vWKeGEQK0z7hmEXK7rF_9o5zeVYnzQadDH4jnUZMbcdaR6ZJ5gktkbzyUwPru4bpUJGAiwsA-c2lK37kxspFSfEypFM5DqJDVoYYSp25nCLSQOxM6JB7yQ6o4q3RcuTqCOMgtlq7aYBqXQKMZ3-qT2sSy3RKV-13p4yaAw-IhEnpAwGd06OxJAXOpHOTaDEXdQcEuGFXs03jVQlvxWLMpvEGN3euYutFKuvXdxMLB4QEBvsSYnUza192ugalMwPh0iNs2NeLHI7V3NwbS4-rP8uy1EFseQUeLVt_vrrlezszFZhPyPk52qUoTt96x70dPGSdSIzzKEdr-PMxOe1a88QDqmBU3OAt_BVLImaNjf1V4bicEHMDWcRRt_4m8afWjfuRGh2nkaGy6dVW-w0hi3JjQo81qM9QJ7oM7dySrZ4cR4Z6qomxnlBZdfImbQ57P5PNuK4_DTOrO5rQ0U4jCH0G5W2EGq_DoIdmNt6KUo8zTMIFkOjkwgRYGVijJD-RL1Cx8_RbWb1Bu8UfkWSVnkaLZcBxgYfXNxu-MCS1_0B4PcJfFdsnCNDwKxujm0LIs4WAPxphoTNsWDL1NcvfxNK22nkJtMa7eibP7zySL6Pj9p5JyAJoYyUL6q4y-_qAwUG87fswf_81FYxoeIG2g2fVOfhf_XcgLHkSFdWMnJNO0=w512-h505-no?authuser=0' },
   ],
}

const usersReducer = (state = intialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })
         }
      case SET_USERS:
         return { ...state, users: [...state.users, ...action.users] }

      default:
         return state
   }
}

export const followAC = userId => ({ type: FOLLOW, userId })
export const unfollowAC = userId => ({ type: UNFOLLOW, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })


export default usersReducer