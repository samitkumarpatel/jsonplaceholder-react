import React, { useEffect, useMemo } from 'react'
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom';
import Todos from './Todos';
import Album from './Album';
import Other from './Other';

const SeeMore = () => {
    const { id } = useParams();
    const location = useLocation();
    const searchParams = useMemo(() => new URLSearchParams(location.search),[location.search]);
    const [tab, setTab] = React.useState(null);
    const [currentTab, setCurrentTab] = React.useState('info');

    useEffect(() => {
      setTab(searchParams.get('tab') || 'info');
    },[searchParams])

    useEffect(() => {
      setCurrentTab(tab);
    },[tab])

    const user = useLoaderData();
    const tabClasses = (tab) => {
      return currentTab === tab ? 'nav__tab__selected' : '';
    }

    return (
      <div className='see_more'> 
        <Link to="/">Back</Link>
        <wbr/>
        <nav>
          <span className={`nav__tab ${tabClasses('info')}`} onClick={() => setCurrentTab('info')}>Info</span>
          <span className={`nav__tab ${tabClasses('todos')}`} onClick={() => setCurrentTab('todos')}>Todo's</span>
          <span className={`nav__tab ${tabClasses('album')}`} onClick={() => setCurrentTab('album')}>Album</span>
          <span className={`nav__tab ${tabClasses('other')}`} onClick={() => setCurrentTab('other')}>Other</span>
        </nav>
        <hr/>
        
        {currentTab === 'info' && (
          <>
            <p className='underline'>id: {id}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
            <p>Company: {user.company.name}</p>
            <details>
              <summary>More Info</summary>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </details>

          </>
        )}
        {currentTab === 'todos' && (
          <Todos userId={user.id} />
        )}
        {currentTab === 'album' && (
          <Album userId={user.id} />
        )}
        {currentTab === 'other' && (
          <Other userId={user.id} />
        )}
      </div>
    )
}

export default SeeMore