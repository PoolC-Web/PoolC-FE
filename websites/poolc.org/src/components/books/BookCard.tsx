import { Link } from 'react-router-dom';
import { createStyles } from 'antd-style';
import { Image } from 'antd';
import { MENU } from '~/constants/menus';
import getImageVariantUrl from '~/lib/utils/getImageVariantUrl';

const FALLBACK_BOOK_IMAGE = '/main-banner.png';

const useStyles = createStyles(({ css }) => ({
  item: css`
    display: flex;
    width: 236px;
    height: 426px;
    margin: 0;
  `,
  wrapper: css`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 12px;
    border: 1px solid #eee7de;
    border-radius: 10px;
    background: #fff;
    color: #4c3722;
    transition: box-shadow 160ms ease, transform 160ms ease;

    &:hover {
      text-decoration: none;
      box-shadow: 0 10px 24px rgba(76, 55, 34, 0.12);
      transform: translateY(-2px);
    }
  `,
  coverFrame: css`
    display: flex;
    width: 204px;
    height: 291px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #faf9f7;
  `,
  bookInfo: css`
    display: flex;
    width: 100%;
    min-height: 88px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
  `,
  cover: css`
    width: 100%;
    height: 100%;

    .ant-image-img {
      width: 100% !important;
      height: 100% !important;
      object-fit: contain;
    }
  `,
  title: css`
    display: -webkit-box;
    width: 100%;
    margin: 0;
    overflow: hidden;
    color: #4c3722;
    overflow-wrap: break-word;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.35;
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `,
  author: css`
    width: 100%;
    margin: 0;
    overflow: hidden;
    color: #7b736a;
    font-size: 12px;
    line-height: 1.35;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  borrowStateCommon: css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 58px;
    height: 20px;
    margin-top: auto;
    padding: 0 7px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
  `,
  borrowStateDisabled: css`
    background-color: rgba(245, 245, 245, 1);
    color: rgba(130, 121, 113, 1);
  `,
  borrowStateAbled: css`
    background-color: rgba(229, 240, 237, 1);
    color: #176d58;
  `,
}));
export default function BookCard({
  data: { id, title, imageURL, author, status },
}: {
  data: { id?: number; title?: string; imageURL?: string; author?: string; status?: string };
}) {
  const { styles } = useStyles();
  const imageSrc = imageURL ? getImageVariantUrl(imageURL, 'CARD') : FALLBACK_BOOK_IMAGE;

  return (
    <li className={styles.item}>
      <Link to={`/${MENU.BOOKS}/${id}`} className={styles.wrapper}>
        <div className={styles.coverFrame}>
          <Image
            className={styles.cover}
            src={imageSrc}
            alt={`${title}의 이미지`}
            width="204px"
            height="291px"
            fallback={FALLBACK_BOOK_IMAGE}
            preview={false}
            loading="lazy"
          />
        </div>
        <div className={styles.bookInfo}>
          <p className={styles.title}>{title}</p>
          {author && <p className={styles.author}>{author}</p>}
          <div className={`${styles.borrowStateCommon} ${status === 'AVAILABLE' ? styles.borrowStateAbled : styles.borrowStateDisabled}`}>{status === 'AVAILABLE' ? '대출가능' : '대출 불가'}</div>
        </div>
      </Link>
    </li>
  );
}

export function MobileBookRow({
  data: { id, title, imageURL, author, status },
}: {
  data: { id?: number; title?: string; imageURL?: string; author?: string; status?: string };
}) {
  const { styles } = useMobileStyles();
  const imageSrc = imageURL ? getImageVariantUrl(imageURL, 'CARD') : FALLBACK_BOOK_IMAGE;

  return (
    <li className={styles.item}>
      <Link to={`/${MENU.BOOKS}/${id}`} className={styles.link}>
        <img
          className={styles.cover}
          src={imageSrc}
          alt={`${title}의 이미지`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            const image = event.currentTarget;
            image.src = FALLBACK_BOOK_IMAGE;
          }}
        />
        <div className={styles.info}>
          <strong>{title}</strong>
          {author && <span>{author}</span>}
          <em data-available={status === 'AVAILABLE'}>{status === 'AVAILABLE' ? '대출가능' : '대출 불가'}</em>
        </div>
      </Link>
    </li>
  );
}

export function CompactBookCard({
  data: { id, title, imageURL, author, status },
}: {
  data: { id?: number; title?: string; imageURL?: string; author?: string; status?: string };
}) {
  const { styles } = useCompactStyles();
  const imageSrc = imageURL ? getImageVariantUrl(imageURL, 'CARD') : FALLBACK_BOOK_IMAGE;

  return (
    <li className={styles.item}>
      <Link to={`/${MENU.BOOKS}/${id}`} className={styles.link}>
        <img
          className={styles.cover}
          src={imageSrc}
          alt={`${title}의 이미지`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            const image = event.currentTarget;
            image.src = FALLBACK_BOOK_IMAGE;
          }}
        />
        <strong>{title}</strong>
        {author && <span>{author}</span>}
        <em data-available={status === 'AVAILABLE'}>{status === 'AVAILABLE' ? '대출가능' : '대출 불가'}</em>
      </Link>
    </li>
  );
}

const useMobileStyles = createStyles(({ css }) => ({
  item: css`
    width: 100%;
    border-bottom: 1px solid #eee9e2;
    list-style: none;
  `,
  link: css`
    display: grid;
    width: 100%;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 12px;
    padding: 12px 0;
    color: #4c3722;

    &:hover {
      text-decoration: none;
    }
  `,
  cover: css`
    width: 84px;
    height: 118px;
    box-shadow: 2px 2px 12px rgba(115, 115, 115, 0.18);
    object-fit: cover;
  `,
  info: css`
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 4px 0;

    strong {
      display: -webkit-box;
      overflow: hidden;
      color: #4c3722;
      font-size: 15px;
      line-height: 1.45;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      overflow: hidden;
      color: #7b736a;
      font-size: 13px;
      line-height: 1.4;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    em {
      margin-top: auto;
      padding: 4px 8px;
      border-radius: 999px;
      background: #f5f5f5;
      color: #827971;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
    }

    em[data-available='true'] {
      background: #e5f0ed;
      color: #176d58;
    }
  `,
}));

const useCompactStyles = createStyles(({ css }) => ({
  item: css`
    min-width: 0;
    list-style: none;
  `,
  link: css`
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    color: #4c3722;

    &:hover {
      text-decoration: none;
    }

    strong {
      display: -webkit-box;
      width: 100%;
      margin-top: 10px;
      overflow: hidden;
      color: #4c3722;
      font-size: 14px;
      line-height: 1.4;
      text-align: center;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: 100%;
      margin-top: 4px;
      overflow: hidden;
      color: #7b736a;
      font-size: 12px;
      line-height: 1.35;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    em {
      margin-top: 8px;
      padding: 4px 8px;
      border-radius: 999px;
      background: #f5f5f5;
      color: #827971;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
    }

    em[data-available='true'] {
      background: #e5f0ed;
      color: #176d58;
    }
  `,
  cover: css`
    width: min(100%, 176px);
    aspect-ratio: 3 / 4;
    box-shadow: 2px 2px 12px rgba(115, 115, 115, 0.18);
    object-fit: cover;
  `,
}));
