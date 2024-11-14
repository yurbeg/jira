import { Modal, Form } from "antd";
import { useState } from "react";
import ModalForm from "../Form";
const AddIssueModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const handleCreateIssue = (value) => {
    console.log(value);
    form.resetFields();
  };
  const handleClose=()=>{
    onClose()
    form.resetFields()
  }
  return (
    <Modal
      title="Create Issue"
      open={isOpen}
      width={600}
      onCancel={handleClose}
      okText="Create Issue"
      onOk={form.submit}
      centered
      confirmLoading={isLoading}
    >
      <ModalForm form={form} onFinish={handleCreateIssue} />
    </Modal>
  );
};

export default AddIssueModal;
