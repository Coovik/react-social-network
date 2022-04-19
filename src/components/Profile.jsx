function Profile() {
   return (
      <div className="profile">
         <div className="background">
            <img
               src="https://bcentral.com.ar/img/background-img/bg-img-2.jpg"
               alt=""
            />
         </div>
         <div className="icon">
            <img
               src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
               alt=""
            />
         </div>
         <div className="discription">
            <div className="name">Ivan</div>
            <div className="birthdate">10.2001</div>
            <div className="city">Moscow</div>
         </div>
         <div className="posts">
            <div className="create-post">newpost</div>
            <div className="posted-posts">
               <div className="post-1">post-1</div>
               <div className="post-2">post-2</div>
               <div className="post-3">post-3</div>
            </div>
         </div>
      </div>
   );
}
export default Profile