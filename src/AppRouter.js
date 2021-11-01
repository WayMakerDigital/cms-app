import { Switch, Route } from 'react-router-dom';
import AllBlogs from './Components/AllBlogs';
import App from './App';
import CreatePost from './Components/CreatePost';
import UpdatePost from './Components/UpdatePost';

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={AllBlogs}/>
            <Route path="/AllBlogs" exact component={AllBlogs}/>
            <Route path="/CreatePost" exact component={CreatePost}/>
            <Route path="/single/:id" exact component={App} />
            <Route path="/update/:id" exact component={UpdatePost} />
        </Switch>
    )
}

export default AppRouter
