import { styled } from "styled-components";

export const StyledContainer = styled.section`
    padding: 0.5rem 4rem;
    @media screen and (max-width: 600px) {
        padding: 0.5rem 0.5rem;
    }
`;
export const StyledFlexDiv = styled.div`
    display: flex;
    gap: 2rem;
    padding: 1rem 1rem;
    justify-content: center;
`;
export const StyledFlexDivSpace = styled(StyledFlexDiv)`
    justify-content: space-between;
`;

export const StyledDivider = styled.div`
  border-left: 1px solid #ccc;
  height: 100px;
`;
export const StyledWith1 = styled.div`
  width: 50%;
`;
export const StyledWith2 = styled.div`
  width: 35%;
`;

