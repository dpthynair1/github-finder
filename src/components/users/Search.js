import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search  = ({}) =>  {


    const githubContext = useContext(GithubContext)

    const alertContext = useContext(AlertContext)

    const [text,setText] = useState('')
    
     const onSubmit = e => {
        e.preventDefault()
        if (text === ''){
           alertContext.setAlert('Please enter a text', 'light');
        } else {
            githubContext.searchUsers(text)
            setText('')
        }
        
    }

    const onChange = (e) =>  setText(e.target.value) 
    
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search users here ..." value={text} onChange={onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            {/* /* // if users exist show clear i.e clearUsers button */ }
                {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers} >Clear Users</button>}

            </div>
        )
    
}



export default Search
