import React from "react";
import './UserListItem.css'


const UserListItem = (props) => {

    // const [isHovered, setIsHovered] = useState(false);
    let imageSrc = '';
    try {
        imageSrc = require(`../../Resources/images/${props.user.avatar}`);
    } catch (e) {
        imageSrc = require(`../../Resources/images/placeholder_77x77.png`);        
    }

    return (
        <>
            <div className='userListItem'>
                <div className="innerDiv" style={{ width: '100%', height: '100%', paddingLeft: 16, justifyContent: 'flex-start', gap: 16, display: 'inline-flex' }}>
                    <div >
                        <img style={{ width: 44, height: 44, borderRadius: 9999 }} src={imageSrc} alt='IMG' />
                    </div>
                    <div style={{ height: 48, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ color: '#474E55', fontSize: 16, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>{props.user.first_name + ' ' + props.user.last_name}</div>
                        </div>
                        <div style={{ color: '#7B93AF', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>{props.user.user_role}</div>
                    </div>
                    <div class="deleteButton" style={{ marginLeft: 'auto' }} onClick={() => props.onDeleteUser(props.user.user_id)}>Remove</div>
                </div>
            </div>
        </>
    );
}

export default UserListItem