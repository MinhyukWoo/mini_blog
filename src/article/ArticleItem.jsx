import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`

const Title = styled.p`
    font-size: 16pt;
    white-space: pre-wrap;
`

function ArticleItem({ article, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <Title>
                {article.title}
            </Title>
        </Wrapper>
    );
}

export default ArticleItem;