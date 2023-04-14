import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type OwnProps = {
  viewName: string;
  viewIcon?: IconProp;
};

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  color: ${(props) => props.theme.text60};
  font-weight: 500;
  padding-left: ${(props) => props.theme.spacing(2)};
`;

const StyledIcon = styled.div`
  display: flex;
  margin-right: ${(props) => props.theme.spacing(1)};
`;

function TableHeader({ viewName, viewIcon }: OwnProps) {
  return (
    <StyledTitle>
      <StyledIcon>{viewIcon && <FontAwesomeIcon icon={viewIcon} />}</StyledIcon>
      {viewName}
    </StyledTitle>
  );
}

export default TableHeader;
