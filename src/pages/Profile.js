import React, {Fragment, useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Repos from '../components/Repos'
import { GithubContext } from '../context/github/githubContext'

export default function Profile({match}) {
   const {getUser,getRepos,loading,user} = useContext(GithubContext)
    const urlName = match.params.name

    useEffect(() => {
      getUser(urlName)
      getRepos(urlName)
      // eslint-disable-next-line
    }, [])

    if(loading) {
      return <p className='text-center'>Завантаження</p>
    }

    const {
      name, company, avatar_url,
      location, bio, blog,
      login, html_url, followers,
      following, public_repos,
      public_gists
    } = user

    return (
       <Fragment>
         <Link to='/' className='btn btn-link'>На головну</Link>
         <div className="card mb-4">
          <div className="card-body">
          <div className="row">
          <div className="col-sm-3 text-center">
            <img
            src={avatar_url}
            alt={name}
            style={{width:'150px'}}
            />
            <h1>{name}</h1>
    {location && <p>Місцезнаходження: {location}</p>}
          </div>
            <div className='col'>
              {bio && <Fragment>
                <h3>BIO</h3>
              <p>{bio}</p>
                </Fragment>
                }
                <a
                href={html_url}
                target='_blank'
                rel="noopener noreferrer"
                className="btn btn-dark"
                >Відкрити профіль
                </a>
                <ul>
                  {login && <li>
                    <strong>Username:</strong> {login}
                    </li>}

                    {company && <li>
                    <strong>Company:</strong> {company}
                    </li>}

                    {blog && <li>
                    <strong>Website:</strong> {blog}
                    </li>}
                </ul>
                <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-success">Подписан: {following}</div>
              <div className="badge badge-info">Репозитории: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
          </div>
         </div>

         <Repos/>
       </Fragment>
    )
}
