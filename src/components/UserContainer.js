import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

function UserContainer({userData, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading...</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Users List</h2>
            {
                userData.users.map(user => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
