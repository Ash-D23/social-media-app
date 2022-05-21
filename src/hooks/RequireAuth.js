import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function RequireAuth({ children }){
    const location = useLocation()
    const { user } = useSelector(state => state.user)
    
    if (!user) {
        return <Navigate to='/login' state={{ from: location.pathname }} />
    }
    return children
}

export default RequireAuth