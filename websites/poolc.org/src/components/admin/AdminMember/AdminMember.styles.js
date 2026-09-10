import styled from '@emotion/styled';
import colors from '../../../lib/styles/colors';

export const PageHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 18px;

  @media (max-width: 767px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: ${colors.brown[1]};
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.25;
`;

export const TitleMeta = styled.p`
  margin: 8px 0 0;
  color: ${colors.brown[0]};
  font-size: 0.9rem;
`;

export const ToolbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const FilterControl = styled.select`
  height: 38px;
  padding: 0 30px 0 10px;
  border: 1px solid #d8d0c6;
  border-radius: 6px;
  background: #fff;
  color: ${colors.brown[1]};
  font-size: 0.875rem;
`;

export const TabFilterRow = styled.div`
  position: relative;
  width: 100%;

  > div {
    width: 100%;

    .ant-tabs-nav {
      padding-right: 210px;
    }
  }

  > select {
    position: absolute;
    top: 6px;
    right: 0;
  }
`;

export const MemberTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid rgba(76, 55, 34, 0.12);
  border-radius: 8px;
`;

export const MemberTable = styled.table`
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  table-layout: fixed;
  color: ${colors.brown[1]};
  font-size: 0.84rem;

  th,
  td {
    padding: 13px 14px;
    border-bottom: 1px solid rgba(76, 55, 34, 0.08);
    text-align: center;
    vertical-align: middle;
  }

  th:nth-of-type(1) { width: 24%; }
  th:nth-of-type(2) { width: 18%; }
  th:nth-of-type(3) { width: 16%; }
  th:nth-of-type(4) { width: 22%; }
  th:nth-of-type(5) { width: 20%; }

  tbody tr:last-of-type td {
    border-bottom: 0;
  }
`;

export const TableHead = styled.tr`
  background: ${colors.mint[0]};

  th {
    color: ${colors.brown[1]};
    font-size: 0.8rem;
    font-weight: 800;
    text-align: center;
  }
`;

export const MemberListRow = styled.tr`
  cursor: pointer;

  &:hover {
    background: rgba(229, 240, 237, 0.45);
  }

`;

export const MemberIdentity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  strong {
    font-weight: 800;
  }

  span {
    color: ${colors.brown[0]};
    font-size: 0.76rem;
  }
`;

export const PendingActions = styled.div`
  display: inline-flex;
  gap: 6px;

  button {
    width: 60px;
    height: 36px;
    padding: 0;
    border-radius: 5px;
    font-size: 0.78rem;
    font-weight: 800;
    white-space: nowrap;
  }
`;

export const PendingActionButton = styled.button`
  border: 1px solid #b7ded1;
  background: #fff;
  color: ${colors.mint[3]};
`;

export const PendingDeleteButton = styled.button`
  border: 1px solid #f2b5b5;
  background: #fff;
  color: #d95757;
`;

export const RoleSelect = styled.select`
  min-width: 96px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid #d8d0c6;
  border-radius: 5px;
  background: #fff;
  color: ${colors.brown[1]};
  font-size: 0.78rem;
`;

export const EmptyResult = styled.p`
  margin: 0;
  padding: 42px 20px;
  color: ${colors.brown[0]};
  font-size: 0.9rem;
  text-align: center;
`;
