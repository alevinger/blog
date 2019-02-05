import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  state = {
    auth: true
  }
  render () {
    return (
            <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><NavLink
                        activeClassName="hightlight"
                        activeStyle={{
                          color: '#fa9235',
                          textDecoration: 'underline'
                        }}
                        to="/posts/"
                        exact>Posts</NavLink></li>
                        <li><NavLink activeClassName="hightlight" to="/new-post">New Post</NavLink></li>
                    </ul>
                </nav>
            </header>

            <Switch>
              {this.state.auth ? <Route path="/new-post/" component={NewPost} /> : null }
              <Route path="/posts" component={Posts} />
              <Route path="/" exact component={Posts} />
              <Route render={ ()=> <h1>Not found</h1>}/>
            </Switch>
          </div>
        );
    }
}

export default Blog;
