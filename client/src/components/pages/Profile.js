import { useContext } from "react";
import UserContext from "../../context/userContext.js";
const Profile = (props) => {
   const { user } = useContext(UserContext);


    return (
        <div>     
          <form className="shadow">
            <h1 className="text-center">Profile</h1>
            <h2 className="text-center" id="username">Hi {user.username}</h2> 
              <div className="mb-3">
                <label htmlFor="postContent" className="form-label">Make a Post:</label>
                <input type="text" className="form-control" id="postContent" name="postContent"/>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
          </form>

        </div>
      );
}

/*          <div className="mb-3">
           <label htmlFor="view" className="form-label">Previous Posts:</label>
        <ul>
        { props.posts.map((post) => 
        <div>
          <li key={post._id}>{post.postContent}</li>
          <button type="submit" className="btn btn-primary">Delete</button>
        </div>
        ) }
      </ul>
          </div>
          */

export default Profile;