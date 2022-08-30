import React from "react";
import styled from "styled-components";
import ArticleItem from "./ArticleItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
    > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`

function ArticleList({ articles, onClickItem }) {
    return (
        <Wrapper>
            {articles.map((article, index) => {
                return (
                    <ArticleItem
                        key={index}
                        article={article}
                        onClick={() => { onClickItem(index) }}
                    ></ArticleItem>
                );
            })}
        </Wrapper>
    )
}

export default ArticleList;