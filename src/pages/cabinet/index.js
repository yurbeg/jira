import { useState } from "react";
import { Button } from "antd";
import AddIssueModal from "../../components/sheard/IssueModal/Add";
const Cabinet = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = ()=>{
    setShowModal(false)
  }
  return (
    <div>
      <Button type="primary" onClick={handleShowModal}>
        Create Issue
      </Button>
      <AddIssueModal onClose={handleCloseModal} isOpen={showModal} />
    </div>
  );
};

export default Cabinet;
