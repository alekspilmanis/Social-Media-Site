import { fetchData } from "../../main.js";
import { useContext } from "react";
import UserContext from "../../context/userContext.js";
const Profile = (props) => {
   const { user } = useContext(UserContext);
   const username = user.username;

   //Creates post, adds to user array
   const createPost = (e) => {
    e.preventDefault();
    const postContent = document.getElementById("postContent").value;
    

    console.log(postContent);
    console.log(username);
    fetchData("/user/createPost",
    {
      postContent,
      username
    },
    "PUT")
    .then((data) => {
      if(!data.message) {
        console.log(data)
      }
    })  
    .catch((error) => {
      console.log(error)
    })

    getPosts();
   }

   //fetches user's posts
   const getPosts = (e) => {
   fetchData("/user/getPosts",
   {
    username
   },
   "POST")
   .then((data) => {
    if(!data.message) {
      console.log(data)
      document.getElementById('posts').appendChild(displayPosts(data));
    }
  })  
  .catch((error) => {
    console.log(error)
  })

}

//displays posts on profile page
function displayPosts(posts) {

  //clears the list so the whole list doesnt repeat again
  document.getElementById('posts').innerHTML = '';

  var list = document.createElement('ul');

  for (var i = 0; i < posts.length; i++) {
      
      var post = document.createElement('li');
      
      post.appendChild(document.createTextNode(posts[i]));

      list.appendChild(post);
  }

  return list;
}

const deletePost = (e) => {
  fetchData("/user/deletePost",
  {
    username
  },
  "POST")
  .then((data) => {
    if(!data.message) {
      console.log(data)
      document.getElementById('posts').appendChild(displayPosts(data));
    }
  })  
  .catch((error) => {
    console.log(error)
  })

}





    return (
        <div>     
          <form className="shadow" onSubmit={createPost}>
            <h1 className="text-center">Profile</h1>
            <h2 className="text-center" id="username">Hi {user.username}</h2> 
              <div className="mb-3">
                <label htmlFor="postContent" className="form-label">Make a Post:</label>
                <input type="text" className="form-control" id="postContent" name="postContent"/>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
          </form>
          <div className="mb-3">
           <label htmlFor="view" className="form-label">Previous Posts:</label>
           <div id="posts">
           </div>
          <button type="submit" className="btn btn-primary" onClick={deletePost}>Delete</button>
        </div>
        </div>
      );
}

export default Profile;