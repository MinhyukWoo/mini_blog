import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArticleList from "../article/ArticleList";
import articles from "../data/articles"

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`
const Container = styled.div`
    width: 100%;
    max-width: 720px;
`

function ArticleView() {
    const navigate = useNavigate()
    const onClickItem = (index) => {
        navigate("article")
    }
    return (
        <Wrapper>
            <Container>

                <ArticleList
                    articles={articles} onClickItem={onClickItem}></ArticleList>
            </Container>
        </Wrapper>

    )
}

export default ArticleView;