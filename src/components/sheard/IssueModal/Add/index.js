import { Modal, Form,notification } from "antd";
import { useState } from "react";
import ModalForm from "../Form";
import { db } from "../../../../services/firbase";
import { doc,setDoc } from "firebase/firestore";
 import { FIRESTORE_PATH_NAMES } from "../../../../core/utils/constants";
import { generateUid } from "../../../../core/helpers/generateUid";

const AddIssueModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const handleCreateIssue = async (value) => {
    setIsLoading(true)
    const taskId = generateUid()
    const taskModel = {
      taskId,
      ...value,
      date:new Date().toLocaleDateString()
    }

    try{
      const createdDoc = doc(db,FIRESTORE_PATH_NAMES.ISSUES,taskId)
      await setDoc(createdDoc,taskModel)
      onClose()
      form.resetFields();
      notification.success({
        message:"Your task me been created"
      })
    }
    catch{
      notification.error({
        message:"Error oopss"
      })
    }
    finally{
    setIsLoading(false)
    
    }
    console.log(value);
    
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
