import styled from '@emotion/styled';
import { Select } from 'antd';
import colors from '../../../lib/styles/colors';

export const MemberSelect = styled(Select)`
  width: 100%;

  .ant-select-selector {
    min-height: 38px !important;
    border-color: ${colors.brown[0]} !important;
    border-radius: 6px !important;
  }
`;

export const QrAttendanceBadge = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 2px 6px;
  border-radius: 999px;
  background: #e8f6f1;
  color: ${colors.mint[3]};
  font-size: 0.7rem;
  font-weight: 800;
`;

export const AttendanceSourceBadge = styled.span`
  display: inline-flex;
  min-height: 24px;
  align-items: center;
  justify-content: center;
  padding: 0 9px;
  border-radius: 999px;
  background: ${({ $source }) => ($source === 'QR' ? '#e8f6f1' : '#f5eee6')};
  color: ${({ $source }) => ($source === 'QR' ? colors.mint[3] : '#8a6240')};
  font-size: 0.76rem;
  font-weight: 800;
`;

export const ActivityTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid rgba(76, 55, 34, 0.12);
  border-radius: 8px;
`;

export const ActivityTable = styled.table`
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  color: ${colors.brown[1]};
  font-size: 0.84rem;

  th, td {
    padding: 13px 14px;
    border-bottom: 1px solid rgba(76, 55, 34, 0.08);
    text-align: center;
    vertical-align: middle;
  }

  th:nth-of-type(1) { width: 36%; }
  th:nth-of-type(2) { width: 18%; }
  th:nth-of-type(3) { width: 16%; }
  th:nth-of-type(4) { width: 30%; }

  tbody tr:last-of-type td { border-bottom: 0; }
`;

export const TableHead = styled.tr`
  background: ${colors.mint[0]};

  th { font-size: 0.8rem; font-weight: 800; }
`;

export const ActivityTableRow = styled.tr`
  &:hover { background: rgba(229, 240, 237, 0.45); }

  td:first-of-type {
    strong, span { display: block; }
    strong { font-weight: 800; }
    span { color: ${colors.brown[0]}; font-size: 0.76rem; }
  }
`;

export const PageHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 18px;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${colors.brown[1]};
  font-size: 1.75rem;
  font-weight: 800;
`;

export const ToolbarActions = styled.div`
  display: flex;
  align-items: center;

  > a { margin: 0; }
`;

export const DeleteButton = styled.button`
  min-width: 56px;
  padding: 7px 10px;
  border: 1px solid #f2b5b5;
  border-radius: 5px;
  background: #fff;
  color: #d95757;
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 800;
`;

export const ActivityActions = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  > a,
  > button {
    min-width: 56px;
    margin: 0;
    padding: 7px 10px;
    white-space: nowrap;
  }
`;

export const EmptyResult = styled.p`
  margin: 0;
  padding: 32px 20px;
  color: ${colors.brown[0]};
  font-size: 0.84rem;
  text-align: center;
`;
