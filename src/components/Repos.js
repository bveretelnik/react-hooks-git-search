import React, { Fragment,useContext } from 'react'
import { GithubContext } from '../context/github/githubContext'

export default function Repos() {
    const {repos} = useContext(GithubContext)
    return (
        <Fragment>
            {repos.map(repo=>{
                return (
                    <div className='card mb-3' key={repo.id}>
                        <div className='card-body'>
                            <h5>
                                <a
                                href={repo.html_url}
                                rel='noopener noreferrer'
                                target='_blank'
                                >
                                    {repo.name}
                                </a>
                            </h5>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}
