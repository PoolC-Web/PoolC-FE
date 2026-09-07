import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import { Spin } from 'antd';
import BookCard from '../BookCard/BookCard';
import { List } from './BookList.styles';

const BookList = ({ loading, books, member, onBorrowBook, onReturnBook }) => {
  const {
    status: { isLogin },
    user,
  } = member;

  return (
    <Block>
      <WhiteBlock>
        <h2 className="block_title">보유 도서</h2>
        {loading && <Spin />}
        {!loading && (
          <List>
            {books.map((book) => (
              <BookCard key={book.id} book={book} onBorrowBook={onBorrowBook} onReturnBook={onReturnBook} isLogin={isLogin} user={user} />
            ))}
          </List>
        )}
      </WhiteBlock>
    </Block>
  );
};

export default BookList;
