import styled from 'styled-components';

export const MarkerStyles = styled.div`
    transform: translateY(-20px);
`;

export const TitleStyles = styled.div`
    position: absolute;
    top: 120px;
    left: 30px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    z-index: 1;

    @media (max-width: 768px) {
        top: 120px;
        right: 15px;
    }
`;
