import { Avatar,Dropdown,Typography,Flex,theme } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firbase";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/constants/constants";
const { useToken } = theme
const { Text }  = Typography
const AuthProfileDropDown = ({ userProfileInfo })=>{
    
    const { token } = useToken()
    const navigate = useNavigate()
    const handleSignOut = async ()=>{        
        try{
            await signOut(auth)
        }
        catch(e){
            console.log(e + ":signout error");

        }
    }
    const items = [
        {   
            label:"Profile",
            key:0,
            onClick:()=>navigate(ROUTE_CONSTANTS.PROFILE)
        },
        {
            label:"Cabinet",
            key:1,
            onClick:()=>navigate(ROUTE_CONSTANTS.CABINET)
        },
        {
            onClick:handleSignOut,
            label:"Logout",
            key: "logout",

        }
    ]
    const getFulNameLetter = ({ firstName,lastName }) =>{
        if(firstName && lastName){
            return `${firstName[0]} ${lastName[0]}` 
        }
        return '-'
    }
    return (
        <Dropdown  
        menu={{items}} 
        trigger={["click"]}
        dropdownRender={(menu)=>{
            return (
                <div 
                style={{
                    borderRadius: token.borderRadiusLG,
                    backgroundColor: token.colorBgElevated,
                    boxShadow: token.boxShadowSecondary,
                  }}>
                    <Flex vertical align="center"  style={{padding:token.sizeMS}}>
                        <Avatar src = "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"/>   
                        <Text >{userProfileInfo.firstName} {userProfileInfo.lastName}</Text>
                        <Text type="secondary" underline>{userProfileInfo.email}</Text>   
                    </Flex>
                {menu}
            </div>
            )
        }}>
            <Avatar size="large" className="user_profile_avatar">   
                {getFulNameLetter(userProfileInfo)}     
            </Avatar>
        </Dropdown>
    )
}
export default AuthProfileDropDown