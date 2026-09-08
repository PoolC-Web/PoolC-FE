import { useState } from 'react';
import ActionButton from './ActionButton';
import * as fileAPI from '../../../lib/api/file';
import FileUploadModal from '../FileUploadModal/FileUploadModal';
import Modal from '../Modal/Modal';
import uploadableTypes from '../../../constants/uploadableTypes';
import { SUCCESS } from '../../../constants/statusCode';
import { publicConfig } from '../../../lib/config/publicConfig';
import { createCardImage, createDetailImage } from '../../../lib/utils/createCardImage';

const FileUploadButton = ({ files, onSubmit, multiple, buttonStyle, optimizeCardImage = false }) => {
  const [file, setFile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onBrowseFile = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    const maxSize = selectedFile.type.startsWith('image/') ? publicConfig.maxImageFileSize : publicConfig.maxFileSize;
    if (selectedFile.size > maxSize) {
      setErrorMessage('첨부 가능한 최대 크기를 초과하였습니다.');
      onShowErrorModal();
      return;
    }
    if (!uploadableTypes.includes(selectedFile.type)) {
      setErrorMessage('png, jpg, jpeg, pdf, ppt, pptx 형식만 첨부 가능합니다.');
      onShowErrorModal();
      return;
    }
    setFile(selectedFile);
  };

  const onUploadFile = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (file === null) {
      setErrorMessage('파일을 선택해주세요');
      onShowErrorModal();
      return;
    }
    setModalVisible(false);
    try {
      let response;
      if (optimizeCardImage) {
        const [card, detail] = await Promise.all([createCardImage(file), createDetailImage(file)]);
        response = await fileAPI.createImageSet(file, card, detail);
      } else {
        const formData = new FormData();
        formData.append('file', file);
        response = await fileAPI.createFile(formData);
      }

      if (response.status === SUCCESS.OK) {
        setFile(response.data);
        if (multiple) {
          onSubmit([...files, response.data]);
        }
        if (!multiple) {
          onSubmit(response.data);
        }
      }
    } catch (error) {
      setFile(null);
      setErrorMessage(error.response?.data ?? error.message ?? '파일 업로드에 실패했습니다.');
      onShowErrorModal();
    }
  };

  const onShowModal = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const onShowErrorModal = () => {
    setErrorModalVisible(true);
  };

  const onCloseErrorModal = (e) => {
    e.preventDefault();
    setErrorModalVisible(false);
  };

  const buttons = <ActionButton onClick={onCloseErrorModal}>확인</ActionButton>;

  return (
    <>
      <FileUploadModal visible={modalVisible} file={file} onUploadFile={onUploadFile} onBrowseFile={onBrowseFile} onCancel={() => setModalVisible(false)} />
      <Modal contents={errorMessage} buttons={buttons} visible={errorModalVisible} onConfirm={onCloseErrorModal} onCancel={onCloseErrorModal} />
      <ActionButton className="file" onClick={onShowModal} style={buttonStyle ?? { marginBottom: '1rem' }}>
        파일 첨부
      </ActionButton>
    </>
  );
};

export default FileUploadButton;
