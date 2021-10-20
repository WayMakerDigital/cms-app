import { Switch, Route } from 'react-router-dom';
import AllBlogs from './Components/AllBlogs';
import App from './App';

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/allblogs" exact component={AllBlogs}/>
        </Switch>
    )
}

export default AppRouter
