import { storage } from "../../../services/firbase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Upload, Button, message, Progress, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const ImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");

  const handleUpload = ({ file }) => {
    setUploading(true);
    const storageRef = ref(storage, `profileImages/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const { bytesTransferred, totalBytes } = snapshot;
        const progressValue = Math.round((bytesTransferred / totalBytes) * 100);
        setProgress(progressValue);
      },
      (error) => {
        setUploading(false);
        setProgress(0);
        message.error(`Error uploading file ${error.message}`);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((imgUrl) => {
          setUploading(false);
          setProgress(0);
          setUrl(imgUrl);
        });
        message.success(`Upload successful!`);
      }
    );
  };
  return (
    <div>
      <Upload customRequest={handleUpload} showUploadList={false}>
        <Button disabled={uploading} icon={<UploadOutlined />}>
          {uploading ? "Uploading" : "Upload Image"}
        </Button>
      </Upload>
      {uploading && <Progress percent={progress} />}
      {url && <Image width={100} src={url} />}
    </div>
  );
};
export default ImageUpload;
