import c from './Profile.module.css'
import PostsContainer from './posts/PostsContainer';

function Profile(props) {
   return (
      <div className={c.profile}>
         <div className={c.block}>
            <div className={c.background}>
               <img
                  src="https://bcentral.com.ar/img/background-img/bg-img-2.jpg"
                  alt=""
               />
            </div>
            <div className={c.icon}>
               <img
                  src="https://lh3.googleusercontent.com/MPsFuqT5qRPmuAFkuiqbtXX4gMM1Xiy3mpq0aEe8dIKgVoi_5-cZlsUW4l7GCrnVtI7jk2GJSdK1U-b7xOaH4D1XsnCe-nu-V7w5BV8SI0bL179PKpPjIgazwg1kNw2ZQgiSF8AtwnIB38qNd_VXhDkmHKKFxI6xQ9ZQXZHMRVhqoARX5YmlikLsLczYH3JVK9N_3zmlKob5_AaKLbiDDZAbptV4j4Lbn08MFuR2LSAzlBa5hk3UDa3ugNqNjWEP-1eE93PIvSXiL7_Nax-enCqFAtXLSKzLqbIFMasN_yXayY0q0UzDK2J69ak0C9LbMYtMUB8MuRqK_P7cE8fSOajG7eiepfB482htAzcOhA3WkN2xtcc-jFLjDQanQbVYLn_8Bh8lNg5iPZMg1-4Hrgc8ZWEGYACIeAUH5BO4nRlIHRqx-RiN2yE41uN3ChwDAvWWWFXq2nvgaj10pwEhfrMu9sZxUPSXz3GVgXzvuszYKLjRb9wV_4AEr4z7mbqMwcpp8_p41_8knu6V0R4dNxHysYYXYASlPwnOJ6f70g4QKEvKBJ6tFszAZigLKZOVuqqqxmva0TUZpfIWava_H_5nEz8lv_raYguZrgGymmwzt020kCsBRr-ZJJpLzHP6wS8xu7JjJugGR5eUn5YlB3SFm9oYT_JvAMfDy6Q2132N2xjzqVhSBu06uXqjAo6HnOF5miM8j93XYiwkgQJjyGxAp806BMr3AXPDYu6i8de-em00lC-DA5lFnBHtRGlecTSmydIa0eI3_ZPYD9XBtEXhQr0o2ZKYnkGSx5uh0h4iAlht6iI93Won1nQ6QfKqpio=w512-h505-no?authuser=0"
                  alt=""
               />
            </div>
            <div className={c.discription}>
               <div className={c.name}>Ivan</div>
               <div className={c.birthdate}>10.2001</div>
               <div className={c.city}>Moscow</div>
            </div>
         </div>
         <PostsContainer />
      </div>
   );
}
export default Profile