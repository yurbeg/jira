import { Avatar,Dropdown,Button,Typography,Flex,theme } from "antd";
const { useToken } = theme
const { Text }  = Typography
const AuthProfileDropDown = ()=>{
    const { token } = useToken()

    const items = [
        {
            label:"Profile",
            key:0
        },
        {
            label:"Cabinet",
            key:1
        },
        {
            label:"Logout",
            key:2
        }
    ]
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
                        <Text >John Smith</Text>
                        <Text type="secondary" underline>johnsmith@gmail.com</Text>   
                    </Flex>
                {menu}
            </div>
            )
        }}>
            <Avatar size="large" className="user_profile_avatar">
                J S
            </Avatar>
        </Dropdown>
    )
}
export default AuthProfileDropDown