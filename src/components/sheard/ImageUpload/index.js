import { Upload, Progress } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ImageUpload = ({ progress, uploading, handleUpload }) => {
  const {
    userData: { imgUrl,uid,firstName,lastName },
  } = useSelector((store) => store.userProfile.authUserInfo);
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {uploading ? (
        <Progress type="circle" size={80} percent={progress} />
      ) : (
        <PlusOutlined />
      )}
    </button>
  );
  return (
    <div>
        <Upload
        fileList={[
          {
            uid:{uid},
            name:`${firstName} ${lastName}`,
            status:"done",
            url:imgUrl
          }
        ]}
          customRequest={handleUpload}
          listType="picture-card"
        >
          {uploadButton}  
        </Upload>
    </div>
  ); 
};
ImageUpload.propTypes = {
  progress: PropTypes.number.isRequired,
  uploading: PropTypes.bool.isRequired,
  handleUpload: PropTypes.func.isRequired,
};

export default ImageUpload;
