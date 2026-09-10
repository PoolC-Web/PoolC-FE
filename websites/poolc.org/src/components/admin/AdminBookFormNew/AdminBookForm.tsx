// Antd의 Table사용하면 됨.
import { UploadOutlined } from '@ant-design/icons';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { createStyles } from 'antd-style';
import { Form, Input, Typography, Upload, Button, Space, UploadFile, InputNumber, Select, Card, Result, Skeleton } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import { useQueryClient } from '@tanstack/react-query';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import { BookApiResponse, BookControllerService, BookResponse, CreateBookRequest, CustomApi, MemberControllerService, MemberResponse, queryKey, useAppMutation, useAppQuery } from '~/lib/api-v2';
import { useMessage } from '~/hooks/useMessage';
import getFileUrl from '~/lib/utils/getFileUrl';
import { BOOK_CATEGORY_OPTIONS, BookCategory } from '~/constants/bookCategories';
import { publicConfig } from '~/lib/config/publicConfig';
import { createCardImage, createDetailImage } from '~/lib/utils/createCardImage';
import { WhiteNarrowBlock } from '~/styles/common/Block.styles';

export interface FormType {
  id: number;
  title: string;
  link: string;
  image: string;
  author: string;
  discount: number;
  publisher: string;
  isbn: string;
  description: string;
  pubdate: string;
  donor: string;
  category: BookCategory;
}
type PreviewType = {
  uid: string;
  name: string;
  url: string;
  status?: string;
};
const editSchema = z.object({
  title: z.string().min(1, '책 제목을 입력해주세요.'),
  link: z.string(),
  image: z.string(),
  author: z.string().min(1, '저자를 입력해주세요.'),
  discount: z.number().min(0),
  publisher: z.string(),
  isbn: z.string(),
  description: z.string(),
  pubdate: z.string().refine((value) => value === '' || /^\d{4}-\d{2}-\d{2}$/.test(value), 'yyyy-mm-dd 형식으로 입력해주세요.'),
  donor: z.string(),
  category: z.enum(['COMPUTER_LANGUAGE', 'CERTIFICATION_CAREER', 'ETC', 'FRONTEND', 'GAME', 'APP', 'LECTURE_TEXTBOOK', 'AI', 'DATA_ANALYSIS_SECURITY', 'MATH_ELECTRONICS']),
});

type BookFormValues = z.infer<typeof editSchema>;
type RegistrationMode = 'auto' | 'manual';

const useStyles = createStyles(({ css }) => ({
  formContent: css`
    width: 100%;
    max-width: 1210px;
  `,
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      align-items: flex-start;
      flex-direction: column;
    }
  `,
  title: css`
    margin: 0 !important;
    color: #4c3722 !important;
    font-size: 1.75rem !important;
    font-weight: 800 !important;
  `,
  modeSwitch: css`
    margin: 0;

    .ant-btn {
      min-width: 84px;
      border-radius: 0;
    }

    .ant-btn:first-child {
      border-radius: 8px 0 0 8px;
    }

    .ant-btn:last-child {
      margin-left: -1px;
      border-radius: 0 8px 8px 0;
    }
  `,
  manualGrid: css`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  `,
  section: css`
    min-width: 0;
    padding: 18px;
    border: 1px solid #eee7de;
    border-radius: 8px;
    background: #fff;

    .ant-form-item:last-child {
      margin-bottom: 0;
    }
  `,
  wideSection: css`
    grid-column: 1 / -1;
  `,
  sectionTitle: css`
    display: block;
    margin-bottom: 18px;
    color: #4c3722;
    font-size: 1rem;
    font-weight: 800;
  `,
  fieldGrid: css`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 16px;

    .span-two {
      grid-column: 1 / -1;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;

      .span-two {
        grid-column: auto;
      }
    }
  `,
  uploadHint: css`
    margin: -10px 0 14px;
    color: #8b8177;
    font-size: 0.8rem;
  `,
  actionBar: css`
    position: sticky;
    bottom: 0;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
    padding: 12px 0 4px;
    background: linear-gradient(to bottom, transparent, #fff 28%);
  `,
  selectedBookCard: css`
    margin-bottom: 16px;
    border-color: #e9e4dc;

    .ant-card-head {
      min-height: 48px;
      padding: 0 18px;
    }

    .ant-card-head-title {
      color: #4c3722;
      font-weight: 800;
    }

    .ant-card-body {
      padding: 16px 18px;
    }
  `,
  selectedBookContent: css`
    display: flex;
    align-items: center;
    gap: 14px;
  `,
  selectedBookCover: css`
    flex: 0 0 auto;
    width: 56px;
    height: 80px;
    border-radius: 4px;
    object-fit: cover;
  `,
  selectedBookMeta: css`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 3px;
  `,
  isbn: css`
    color: #928981;
    font-size: 0.78rem;
  `,
  registrationSection: css`
    padding: 18px;
    border: 1px solid #eee7de;
    border-radius: 8px;
    background: #fff;

    .ant-form-item:last-child {
      margin-bottom: 0;
    }
  `,
  reSearchButton: css`
    color: #278e75;
  `,
}));

const getInitialValues = (initValues?: FormType): BookFormValues => ({
  title: initValues?.title ?? '',
  link: initValues?.link ?? '',
  image: initValues?.image ?? '',
  author: initValues?.author ?? '',
  discount: initValues?.discount ?? 0,
  publisher: initValues?.publisher ?? '',
  isbn: initValues?.isbn ?? '',
  description: initValues?.description ?? '',
  pubdate: initValues?.pubdate ?? '',
  donor: initValues?.donor ?? '',
  category: initValues?.category ?? 'COMPUTER_LANGUAGE',
});

const toFormType = (book: BookResponse): FormType => ({
  id: book.id ?? 0,
  title: book.title ?? '',
  link: book.link ?? '',
  image: book.imageURL ?? '',
  author: book.author ?? '',
  discount: book.discount ?? 0,
  publisher: book.publisher ?? '',
  isbn: book.isbn ?? '',
  description: book.description ?? '',
  pubdate: book.publishedDate ?? '',
  donor: book.donor ?? '',
  category: book.category ?? 'COMPUTER_LANGUAGE',
});

interface AdminBookFormProp {
  initValues?: FormType;
  onModalCancel?: () => void;
}

interface DonorMemberPickerProps {
  donor: string;
  onChange: (name: string) => void;
}

function DonorMemberPicker({ donor, onChange }: DonorMemberPickerProps) {
  const [query, setQuery] = useState(donor);
  const [members, setMembers] = useState<MemberResponse[]>([]);
  const [selectedMember, setSelectedMember] = useState<MemberResponse | null>(null);
  const { mutate: searchMembers, isPending } = useAppMutation({
    mutationFn: MemberControllerService.findMembersForProjectUsingGet,
    onSuccess: (response) => setMembers(response.data ?? []),
  });

  const handleSearch = () => {
    const name = query.trim();
    if (name) searchMembers({ name });
  };

  const handleSelect = (member: MemberResponse) => {
    if (!member.name) return;
    setQuery(member.name);
    setMembers([]);
    setSelectedMember(member);
    onChange(member.name);
  };

  const handleChangeSelection = () => {
    setSelectedMember(null);
    setQuery('');
    onChange('');
  };

  return (
    selectedMember ? (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '10px 12px', border: '1px solid #bde7dc', borderRadius: 8, background: '#f7fcfa' }}>
        <div>
          <Typography.Text strong style={{ color: '#23886f' }}>✓ 기증자 선택됨</Typography.Text><br />
          <Typography.Text strong>{selectedMember.name}</Typography.Text>
          {(selectedMember.studentID || selectedMember.department) && <Typography.Text type="secondary"> · {[selectedMember.studentID, selectedMember.department].filter(Boolean).join(' · ')}</Typography.Text>}
        </div>
        <Button htmlType="button" onClick={handleChangeSelection}>변경</Button>
      </div>
    ) : (
      <>
      <Input.Search
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onSearch={handleSearch}
        onPressEnter={(event) => event.preventDefault()}
        loading={isPending}
        placeholder="기증자 이름으로 검색"
        enterButton="검색"
      />
      {members.length > 0 && (
        <div style={{ display: 'grid', gap: 6, marginTop: 8 }}>
          {members.map((member) => (
            <Button key={member.loginID} type="default" htmlType="button" block onClick={() => handleSelect(member)} style={{ height: 'auto', padding: '8px 12px', textAlign: 'left' }}>
              <strong>{member.name}</strong>
              {(member.studentID || member.department) && <span> · {[member.studentID, member.department].filter(Boolean).join(' · ')}</span>}
            </Button>
          ))}
        </div>
      )}
      </>
    )
  );
}

export default function AdminBookForm({ initValues, onModalCancel }: AdminBookFormProp) {
  const history = useHistory();
  const location = useLocation<{ book?: FormType }>();
  const { bookID } = useParams<{ bookID?: string }>();
  const { styles } = useStyles();
  const queryClient = useQueryClient();
  const message = useMessage();
  const routeBookId = Number(bookID);
  const isRouteEdit = Number.isInteger(routeBookId) && routeBookId > 0;
  const initialBook = initValues ?? location.state?.book;
  const editingBookId = initialBook?.id ?? (isRouteEdit ? routeBookId : undefined);
  const isEdit = editingBookId !== undefined;
  const editBookQuery = useAppQuery({
    queryKey: queryKey.book.book(isRouteEdit ? routeBookId : 0),
    queryFn: () => BookControllerService.getBookUsingGet({ id: routeBookId }),
    enabled: isRouteEdit,
  });
  const [registrationMode, setRegistrationMode] = useState<RegistrationMode>(isEdit ? 'manual' : 'auto');
  const [bookSearchQuery, setBookSearchQuery] = useState('');
  const [bookSearchResults, setBookSearchResults] = useState<BookApiResponse[]>([]);
  const [selectedBook, setSelectedBook] = useState<BookApiResponse | null>(null);
  const form = useForm<BookFormValues>({
    validate: zodResolver(editSchema),
    initialValues: getInitialValues(initialBook),
  });
  const { setValues } = form;
  useEffect(() => {
    if (editBookQuery.data && !initialBook) setValues(toFormType(editBookQuery.data));
  }, [editBookQuery.data, initialBook, setValues]);
  const handleSaveSuccess = () => {
    message.success(isEdit ? '도서 정보가 수정되었습니다.' : '도서가 등록되었습니다.');
    queryClient.invalidateQueries({
      predicate: (query) => query.queryKey[0] === 'book.all' || query.queryKey[0] === 'book.search',
    });
    if (onModalCancel) onModalCancel();
    else history.push('/admin/books');
  };
  const { mutate: createBook } = useAppMutation({ mutationFn: BookControllerService.addBookUsingPost, onSuccess: handleSaveSuccess });
  const { mutate: updateBook } = useAppMutation({ mutationFn: BookControllerService.updateBookUsingPut, onSuccess: handleSaveSuccess });
  const { mutate: searchBooks, isPending: isBookSearchPending } = useAppMutation({
    mutationFn: BookControllerService.searchBooksFromKakaoUsingGet,
    onSuccess: (books) => {
      setBookSearchResults(books);
      if (books.length === 0) message.info('검색 결과가 없습니다. 직접 입력해주세요.');
    },
  });
  const { mutate: fillMissingFields, isPending: isFillingMissingFields } = useAppMutation({
    mutationFn: BookControllerService.searchBooksFromKakaoUsingGet,
    onSuccess: (books) => {
      const candidate = books.find((book) => {
        const isbn = form.values.isbn.split(' ')[0];
        return isbn && book.isbn?.includes(isbn);
      }) ?? books[0];
      if (!candidate) {
        message.info('채울 수 있는 Kakao 도서 정보가 없습니다.');
        return;
      }
      form.setValues({
        ...form.values,
        title: form.values.title || candidate.title || '',
        author: form.values.author || candidate.author || '',
        image: form.values.image || candidate.image || '',
        publisher: form.values.publisher || candidate.publisher || '',
        description: form.values.description || candidate.description || '',
        pubdate: form.values.pubdate || candidate.pubdate || '',
        link: form.values.link || candidate.link || '',
        isbn: form.values.isbn || candidate.isbn || '',
        discount: form.values.discount > 0 ? form.values.discount : candidate.discount || 0,
      });
      message.success('비어 있는 도서 정보를 Kakao 검색 결과로 채웠습니다.');
    },
  });
  const { mutate: uploadImage, isPending: isUploadPending } = useAppMutation({
    mutationFn: ({ original, card, detail }: { original: File; card: File; detail: File }) => CustomApi.uploadImageSet(original, card, detail),
  });

  const handleChangeBookImage = async (info: UploadChangeParam<UploadFile>) => {
    const imageFile = info?.file;

    if (imageFile?.status === 'removed') {
      form.setFieldValue('image', '');
      return;
    }

    const sourceFile = imageFile?.originFileObj;
    if (!sourceFile) return;
    if (!sourceFile.type.startsWith('image/') || sourceFile.size > publicConfig.maxImageFileSize) {
      message.error('10MB 이하의 이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    let cardImage: File;
    let detailImage: File;
    try {
      [cardImage, detailImage] = await Promise.all([createCardImage(sourceFile), createDetailImage(sourceFile)]);
    } catch (error) {
      message.error(error instanceof Error ? error.message : '이미지 변환에 실패했습니다.');
      return;
    }

    uploadImage({ original: sourceFile, card: cardImage, detail: detailImage }, {
      onSuccess(imgUrl) {
        form.setFieldValue('image', imgUrl);
      },
    });
  };
  const uploadedFile: () => UploadFile<PreviewType>[] = () => {
    if (isUploadPending) return [{ uid: 'SOME_UID', status: 'uploading', name: '', url: '' }];
    if (form.errors.image) return [{ uid: 'SOME_UID', status: 'error', name: '', url: '' }];
    if (form.values.image)
      return [
        {
          uid: 'SOME_UID',
          url: getFileUrl(form.values.image),
          name: decodeURI(form.values.image),
          status: 'done',
        },
      ];

    return [];
  };

  const onSubmit = (val: BookFormValues) => {
    if (editingBookId !== undefined) {
      updateBook({ id: editingBookId, request: val });
    } else {
      createBook({ request: val as CreateBookRequest });
    }
  };

  const handleBookSearch = () => {
    const query = bookSearchQuery.trim();
    if (!query) {
      message.info('제목 또는 ISBN을 입력해주세요.');
      return;
    }
    searchBooks({ query });
  };

  const handleFillMissingFields = () => {
    const query = form.values.isbn || form.values.title;
    if (!query) {
      message.info('제목 또는 ISBN이 있어야 Kakao에서 정보를 찾을 수 있습니다.');
      return;
    }
    fillMissingFields({ query });
  };

  const handleSelectBook = (book: BookApiResponse) => {
    form.setValues({
      ...form.values,
      title: book.title ?? form.values.title,
      author: book.author ?? form.values.author,
      image: book.image ?? form.values.image,
      publisher: book.publisher ?? form.values.publisher,
      description: book.description ?? form.values.description,
      pubdate: book.pubdate ?? form.values.pubdate,
      link: book.link ?? form.values.link,
      isbn: book.isbn ?? form.values.isbn,
      discount: book.discount ?? form.values.discount,
    });
    setBookSearchResults([]);
    setSelectedBook(book);
  };

  const handleRegistrationModeChange = (mode: RegistrationMode) => {
    setRegistrationMode(mode);
    setBookSearchResults([]);
    if (mode === 'auto') setSelectedBook(null);
  };

  if (isRouteEdit && editBookQuery.status === 'pending') {
    return <WhiteNarrowBlock><Skeleton /></WhiteNarrowBlock>;
  }

  if (isRouteEdit && editBookQuery.status === 'error') {
    return <WhiteNarrowBlock><Result status="500" subTitle="도서 정보를 불러오지 못했습니다." /></WhiteNarrowBlock>;
  }

  return (
    <WhiteNarrowBlock>
      <div className={styles.formContent}>
        <div className={styles.header}>
          <Typography.Title level={2} className={styles.title}>{isEdit ? '도서 정보 수정' : '도서 등록'}</Typography.Title>
          {!isEdit && (
            <Space className={styles.modeSwitch} size={0}>
              <Button type={registrationMode === 'auto' ? 'primary' : 'default'} onClick={() => handleRegistrationModeChange('auto')}>
                자동 등록
              </Button>
              <Button type={registrationMode === 'manual' ? 'primary' : 'default'} onClick={() => handleRegistrationModeChange('manual')}>
                수동 등록
              </Button>
            </Space>
          )}
          {isEdit && (
            <Button loading={isFillingMissingFields} onClick={handleFillMissingFields}>
              Kakao로 빈 정보 채우기
            </Button>
          )}
        </div>
        <Form name="request" onSubmitCapture={form.onSubmit(onSubmit)}>
        {registrationMode === 'auto' && !isEdit && (
          selectedBook ? (
            <>
              <Card size="small" className={styles.selectedBookCard} title="선택한 도서" extra={<Button type="link" className={styles.reSearchButton} onClick={() => setSelectedBook(null)}>다시 검색</Button>}>
                <div className={styles.selectedBookContent}>
                  {selectedBook.image && <img className={styles.selectedBookCover} src={selectedBook.image} alt="" />}
                  <div className={styles.selectedBookMeta}>
                    <Typography.Text strong>{selectedBook.title}</Typography.Text>
                    <Typography.Text type="secondary">{selectedBook.author}{selectedBook.publisher ? ` · ${selectedBook.publisher}` : ''}</Typography.Text>
                    {selectedBook.isbn && <Typography.Text className={styles.isbn}>ISBN {selectedBook.isbn}</Typography.Text>}
                  </div>
                </div>
              </Card>
              <section className={styles.registrationSection}>
                <Typography.Text className={styles.sectionTitle}>등록 정보</Typography.Text>
                <Form.Item label="카테고리 *">
                  <Select {...form.getInputProps('category')} options={[...BOOK_CATEGORY_OPTIONS]} placeholder="카테고리를 선택하세요" />
                </Form.Item>
                <Form.Item label="기증자">
                  <DonorMemberPicker donor={form.values.donor} onChange={(name) => form.setFieldValue('donor', name)} />
                </Form.Item>
              </section>
            </>
          ) : (
            <>
              <Typography.Paragraph type="secondary">제목 또는 ISBN으로 검색해 표지와 서지 정보를 자동으로 가져옵니다.</Typography.Paragraph>
              <Space.Compact style={{ width: '100%' }}>
                <Input value={bookSearchQuery} onChange={(event) => setBookSearchQuery(event.target.value)} onPressEnter={handleBookSearch} placeholder="예: Java의 정석 또는 ISBN" />
                <Button type="primary" loading={isBookSearchPending} onClick={handleBookSearch}>검색</Button>
              </Space.Compact>
              {bookSearchResults.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginTop: 16 }}>
                  {bookSearchResults.map((book, index) => (
                    <Button
                      key={`${book.isbn ?? book.title ?? 'book'}-${index}`}
                      type="default"
                      block
                      onClick={() => handleSelectBook(book)}
                      style={{ height: 'auto', minHeight: 112, padding: 12, textAlign: 'left', whiteSpace: 'normal' }}
                    >
                      <Space align="start">
                        {book.image && <img src={book.image} alt="" width={52} height={76} style={{ borderRadius: 4, objectFit: 'cover' }} />}
                        <span>
                          <strong>{book.title}</strong><br />
                          {book.author}{book.publisher ? ` · ${book.publisher}` : ''}
                        </span>
                      </Space>
                    </Button>
                  ))}
                </div>
              )}
            </>
          )
        )}
        {(registrationMode === 'manual' || isEdit) && (
          <div className={styles.manualGrid}>
            <section className={styles.section}>
              <Typography.Text className={styles.sectionTitle}>기본 도서 정보</Typography.Text>
              <Form.Item label="책 제목 *">
                <Input {...form.getInputProps('title')} status={form.errors.title ? 'error' : ''} placeholder="예: Java의 정석" />
              </Form.Item>
              <Form.Item label="저자 *">
                <Input {...form.getInputProps('author')} status={form.errors.author ? 'error' : ''} placeholder="예: 남궁성" />
              </Form.Item>
              <Form.Item label="카테고리 *">
                <Select {...form.getInputProps('category')} options={[...BOOK_CATEGORY_OPTIONS]} placeholder="카테고리를 선택하세요" />
              </Form.Item>
            </section>
            <section className={styles.section}>
              <Typography.Text className={styles.sectionTitle}>표지 및 운영 정보</Typography.Text>
              <Form.Item label="표지 이미지">
                <Upload name="upload" listType="picture" beforeUpload={() => false} onChange={handleChangeBookImage} fileList={uploadedFile()}>
                  <Button icon={<UploadOutlined />}>표지 업로드</Button>
                </Upload>
              </Form.Item>
              <p className={styles.uploadHint}>권장 비율 7:10 · JPG, PNG, WEBP · 최대 10MB</p>
              <Form.Item label="기증자">
                <DonorMemberPicker donor={form.values.donor} onChange={(name) => form.setFieldValue('donor', name)} />
              </Form.Item>
            </section>
            <section className={`${styles.section} ${styles.wideSection}`}>
              <Typography.Text className={styles.sectionTitle}>출판 및 구매 정보 <Typography.Text type="secondary">(선택)</Typography.Text></Typography.Text>
              <div className={styles.fieldGrid}>
                <Form.Item label="출판사">
                  <Input {...form.getInputProps('publisher')} />
                </Form.Item>
                <Form.Item label="출판일">
                  <Input {...form.getInputProps('pubdate')} status={form.errors.pubdate ? 'error' : ''} placeholder="yyyy-mm-dd" />
                </Form.Item>
                <Form.Item label="ISBN 도서번호">
                  <Input {...form.getInputProps('isbn')} />
                </Form.Item>
                <Form.Item label="할인가">
                  <InputNumber {...form.getInputProps('discount')} status={form.errors.discount ? 'error' : ''} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="구매 주소" className="span-two">
                  <Input {...form.getInputProps('link')} placeholder="https://" />
                </Form.Item>
                <Form.Item label="소개" className="span-two">
                  <TextArea {...form.getInputProps('description')} placeholder="책 소개를 입력하세요" showCount maxLength={1000} style={{ height: 120, resize: 'none' }} />
                </Form.Item>
              </div>
            </section>
          </div>
        )}
        {/* <StyledInput valueText={title} labelText="책 제목" typeText="text" nameText="title" onChangeFunc={onChangeTitle} placeholderText="ex) 클린 코드" />
        <StyledInput valueText={author} labelText="저자" typeText="text" nameText="author" onChangeFunc={onChangeAuthor} placeholderText="ex) 로버트 C. 마틴" />
        <label>표지 이미지 첨부</label>
        <FileUploadButton onSubmit={setImageURL} />
        <FileName style={{ marginBottom: '0rem' }}>{imageURL ? getFileUrl(imageURL) : '선택된 파일이 없습니다'}</FileName>
        <ImageContainer>
          <ImageContainerHeader>현재 이미지</ImageContainerHeader>
          {imageURL ? <StyledImage src={getFileUrl(imageURL)} /> : <p style={{ fontWeight: 300 }}>이미지가 없습니다.</p>}
        </ImageContainer>
        <StyledInput valueText={info} labelText="설명" typeText="text" nameText="info" onChangeFunc={onChangeInfo} placeholderText="ex) ㅇㅇㅇ 기증" />
        {book ? <StyledActionButton onClick={handleUpdate}>수정</StyledActionButton> : <StyledActionButton onClick={handleCreate}>제출</StyledActionButton>} */}
        {(isEdit || registrationMode === 'manual' || selectedBook) && (
          <div className={styles.actionBar}>
            <Button onClick={() => (onModalCancel ? onModalCancel() : history.push('/admin/books'))}>취소</Button>
            {registrationMode === 'manual' && <Button htmlType="reset">초기화</Button>}
            <Button type="primary" htmlType="submit">{isEdit ? '수정하기' : '등록하기'}</Button>
          </div>
        )}
        </Form>
      </div>
    </WhiteNarrowBlock>
  );
}
