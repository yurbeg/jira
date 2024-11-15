import { Form, Input, Select, Space } from "antd";
import {
  ISSUE_OPTIONS,
  ISSUE_PRIORITY_OPTIONS,
} from "../../../../core/utils/issue";
import Editor from "../../Editor";
const ModalForm = ({ form, onFinish }) => {
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="issueName"
        label="Issue Name"
        rules={[
          {
            required: true,
            message: "Please input issue name!",
          },
        ]}
      >
        <Input type="text" placeholder="Issue Name"></Input>
      </Form.Item>
      <Form.Item
        name="type"
        label="Issue Type"
        rules={[
          {
            required: true,
            message: "Please select issue type!",
          },
        ]}
      >
        <Select placeholder="Issue Type">
          {Object.values(ISSUE_OPTIONS).map(({ value, icon, label }) => {
            return (
              <Select.Option value={value} key={value}>
                <Space>
                  {icon}
                  <span>{label}</span>
                </Space>
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please input description!",
          },
        ]}
      >
        <Editor />
      </Form.Item>
      <Form.Item
        name="prority"
        label="Prority"
        rules={[
          {
            required: true,
            message: "Please select prority!",
          },
        ]}
      >
        <Select placeholder="Prority">
          {Object.values(ISSUE_PRIORITY_OPTIONS).map(({ value, icon, label }) => {
            return (
              <Select.Option value={value} key={value}>
                <Space>
                  {icon}
                  <span>{label}</span>
                </Space>
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
};
export default ModalForm;
