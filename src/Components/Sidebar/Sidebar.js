import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import ThreeDotsIcon from '../Icons/ThreeDots.js'
import ChevronLeftIcon from '../Icons/ChevronLeft.js'
import UserGroupIcon from '../Icons/UserGroup.js'
import UserAddIcon from '../Icons/UserAdd.js'
import UserList from '../User/UserList.js'
import './Sidebar.css'

const Sidebar = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    const [users, setUsers] = React.useState([]);
    useEffect(() => {

        (async () => {
            const res = await axios.get(`http://localhost:8070/api/users`);
            setUsers(res.data);
        })();
    }, [])


    const DeleteUser = async (uid) => {
        await axios.delete(`http://localhost:8070/api/users/${uid}`);
        const res = await axios.get(`http://localhost:8070/api/users`);
        setUsers(res.data);
    }


    return (
        <>
            <button className="App-link" onClick={toggleDrawer}>Open right drawer</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='drawerStyle'
            >
                <div className='drawerContainer'>

                    <div className='headerContainer' style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ChevronLeftIcon onClickHandler={toggleDrawer} />
                        <ThreeDotsIcon />
                    </div>

                    <div className='avatarContainer'>
                        <div style={{ width: '100%', height: '100%', paddingLeft: 32, paddingRight: 32, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div style={{ width: 90, height: 90, position: 'relative' }}>
                                <div style={{ width: 90, height: 90, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 9999, border: '1px #FFB97B solid' }} />
                                <img style={{ width: 77.29, height: 77.29, left: 6.35, top: 6.35, position: 'absolute', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.15) inset', borderRadius: 9999 }} src={require(`../../Resources/images/placeholder_77x77.png`)} alt='Team' />
                            </div>
                            <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                                <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                                    <div style={{ color: '#474E55', fontSize: 20, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word' }}>Team Name</div>
                                </div>
                                <div style={{ width: 107, textAlign: 'center', color: '#425B76', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>22  jan 2023</div>
                            </div>
                        </div>
                    </div>

                    <div className='statusBarContainer'>
                        <div style={{ width: '100%', height: '100%', paddingLeft: 32, paddingRight: 32, paddingTop: 20, paddingBottom: 20, background: '#F1F1F1', justifyContent: 'center', alignItems: 'center', gap: 37, display: 'inline-flex' }}>
                            <div style={{ flex: '1 1 0', height: 24, justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                                <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex' }}>
                                    <UserGroupIcon />
                                    <div style={{ color: '#474E55', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>{users.length} members</div>
                                </div>
                                <UserAddIcon />
                            </div>
                        </div>
                    </div>

                    <UserList users={users} onDeleteUser={DeleteUser} />

                </div>

            </Drawer>
        </>
    );
}

export default Sidebar
