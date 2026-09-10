import styled from '@emotion/styled';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import { DatePicker, Select } from 'antd';

export const StyledSelect = styled.select`
  width: 100%;
  height: 38px;
  padding: 0 12px;
  border: 1px solid ${colors.brown[0]};
  border-radius: 6px;
  background: #fff;
  color: ${colors.brown[1]};
  font-size: 0.9rem;
`;

export const ProjectDatePicker = styled(DatePicker)`
  width: 100%;
  height: 38px;
  border-color: ${colors.brown[0]};
  border-radius: 6px;

  input { color: ${colors.brown[1]}; }
`;

export const MemberSelect = styled(Select)`
  width: 100%;

  .ant-select-selector {
    min-height: 38px !important;
    border-color: ${colors.brown[0]} !important;
    border-radius: 6px !important;
  }
`;

export const ThumbnailHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  > button {
    flex: 0 0 auto;
    margin: 0;
    white-space: nowrap;
  }
`;

export const FieldHeader = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;

  label {
    color: ${colors.brown[1]};
    font-size: 0.9rem;
    font-weight: 800;
  }

  span {
    color: ${colors.brown[0]};
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4, p { margin: 0; }
  h4 { color: ${colors.brown[1]}; font-size: 0.9rem; font-weight: 800; }
  p { color: ${colors.brown[0]}; font-size: 0.82rem; }
`;

export const MemberBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid #e5e0d7;
  border-radius: 6px;
  background: #faf9f7;
`;

export const MemberInfo = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 2px;

  strong { color: ${colors.brown[1]}; font-size: 0.88rem; }
  span { color: ${colors.brown[0]}; font-size: 0.76rem; }
`;

export const ButtonContainer = styled.div`
  flex: 0 0 auto;

  button {
    min-width: 48px;
    min-height: 32px;
    margin: 0;
    padding: 0 10px;
  }
`;
