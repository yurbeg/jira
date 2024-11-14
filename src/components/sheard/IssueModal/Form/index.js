import { Form, Input,Select,Space} from "antd"
import { ISSUE_OPTIONS } from "../../../../core/utils/issue"
const ModalForm = ({form,onFinish}) =>{        
    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
            name="issueName"
            label="Issue Name"
            rules={[
                {
                  required: true,
                  message: 'Please input issue name!'
                }
              ]}>
                <Input type = "text"placeholder="Issue Name"></Input>
            </Form.Item>
            <Form.Item
            name="type"
            label="Issue Type"
            rules={[
                {
                  required: true,
                  message: 'Please select issue type!'
                }
              ]}
            >
                <Select placeholder="Issue Type"
                 >
                    {
                        Object.values(ISSUE_OPTIONS).map(({value,icon,label})=>{
                            return(
                                <Select.Option value={value} key={value} >
                                   <Space>
                                    {icon}
                                    <span>{label}</span>
                                    </Space> 
                                </Select.Option>
                            )
                        })
                    }
                </Select>
            </Form.Item>
        </Form>
    )
}
export default ModalForm