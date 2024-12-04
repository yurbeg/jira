import { useState,useEffect } from "react";
import { Button } from "antd";
import AddIssueModal from "../../components/sheard/IssueModal/Add";
import { useSelector,useDispatch } from "react-redux";
import { fetchIssueData } from "../../state-managment/slices/issues"
const Cabinet = () => {
  const dispatch  = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const { data,isLoading } = useSelector((store)=>store.issues)
  console.log(data);
  
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = ()=>{
    setShowModal(false)
  }

  useEffect (()=>{
    dispatch(fetchIssueData())
  },[])
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
