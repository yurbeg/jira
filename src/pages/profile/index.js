import { useEffect, useState } from 'react';
import { Form, Input, Button, notification,message } from 'antd';
import { doc, updateDoc } from 'firebase/firestore'
import { db,storage } from '../../services/firbase';
import { FIRESTORE_PATH_NAMES,STORAGE_PATH_NAMES} from '../../core/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfileInfo,setProfileImgUrl} from '../../state-managment/slices/userProfile';
import ImageUpload from '../../components/sheard/ImageUpload';
import { ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import './index.css';
const Profile = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();
  const { authUserInfo: { userData } } = useSelector((store) => store.userProfile);
  const [ form ] = Form.useForm();
  const [ buttonLoading, setButtonLoading ] = useState(false);
  const { uid, ...restData } = userData;

  useEffect(() => {
    form.setFieldsValue(restData);
  }, [form, restData]);

  const handleEditUserProfile = async (values) => {
    setButtonLoading(true);
    try {
      const userDocRef = doc(db, FIRESTORE_PATH_NAMES.REGISTERED_USERS, uid);
      await updateDoc(userDocRef, values);
      dispatch(fetchUserProfileInfo())

      notification.success({
        message: 'User data successfully updated'
      });
    } catch (error) {
      notification.error({
        message: 'Error :('
      });
    } finally {
      setButtonLoading(false);
    }
  }
  const handleUpload = ({ file }) => {
    setUploading(true);
    const storageRef = ref(
      storage,
      `${STORAGE_PATH_NAMES.PROFILE_IMAGES}/${uid}`
    );
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
          updateUserProfileImage(imgUrl);
          dispatch(setProfileImgUrl(imgUrl));
        });
        message.success(`Upload successful!`);
      }
    );
  };
  const updateUserProfileImage = async (imgUrl) => {
    try {
      const userDocRef = doc(db, FIRESTORE_PATH_NAMES.REGISTERED_USERS, uid);
      await updateDoc(userDocRef, { imgUrl });
    } catch (error) {
      notification.error({
        message: "Error :(",
      });
    }
  };

  return (
    <div className="form_page_container">

      <Form layout="vertical" form={form} onFinish={handleEditUserProfile}>
        <Form.Item
          label="Profile Image"
        >

        <ImageUpload 
          handleUpload={handleUpload}
          progress={progress}
          uploading={uploading}
        />

        </Form.Item>

        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your First Name!'
            }
          ]}
        >
          <Input
            placeholder="First Name"
          />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your Last Name!'
            }
          ]}
        >
          <Input
            placeholder="Last Name"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
        >
          <Input
            readOnly
            placeholder="Email"
          />

        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: 'Please input your Phone Number!'
            }
          ]}
        >
          <Input
            placeholder="Phone Number"
          />

        </Form.Item>

        <Button type="primary" htmlType="submit" loading={buttonLoading}>
          Submit
        </Button>
      </Form>
    </div>
  )
};

export default Profile;