export const BOOK_CATEGORY_OPTIONS = [
  { value: 'COMPUTER_LANGUAGE', label: '컴퓨터 언어' },
  { value: 'CERTIFICATION_CAREER', label: '자격증/취업' },
  { value: 'ETC', label: '기타' },
  { value: 'FRONTEND', label: '프론트엔드' },
  { value: 'GAME', label: '게임' },
  { value: 'APP', label: '앱' },
  { value: 'LECTURE_TEXTBOOK', label: '강의 교재' },
  { value: 'AI', label: 'AI' },
  { value: 'DATA_ANALYSIS_SECURITY', label: '데이터분석/보안' },
  { value: 'MATH_ELECTRONICS', label: '수학/전자' },
] as const;

export type BookCategory = (typeof BOOK_CATEGORY_OPTIONS)[number]['value'];
export type BookCategoryTab = 'ALL' | BookCategory;

export const BOOK_CATEGORY_TABS: { key: BookCategoryTab; label: string }[] = [
  { key: 'ALL', label: '전체' },
  ...BOOK_CATEGORY_OPTIONS.map(({ value, label }) => ({ key: value, label })),
];

export const getBookCategoryLabel = (category?: BookCategory) => BOOK_CATEGORY_OPTIONS.find((option) => option.value === category)?.label ?? '미분류';
