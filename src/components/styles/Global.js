import styled from "styled-components"

const Container = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 15px;
    position: relative;
    z-index: 2;
`

const Section = styled.section`
    height: 100dvh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export {Container, Section}