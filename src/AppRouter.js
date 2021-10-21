import { Switch, Route } from 'react-router-dom';
import AllBlogs from './Components/AllBlogs';
import App from './App';
import CreatePost from './Components/CreatePost';

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/allblogs" exact component={AllBlogs}/>
            <Route path="/createpost" exact component={CreatePost}/>
        </Switch>
    )
}

export default AppRouter
