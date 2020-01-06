/* eslint-disable react/forbid-prop-types */
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const LeftSide = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Currency = styled.div`
  display: flex;
  padding-bottom: 5px;
`

const CurrencyLogo = styled.img`
  margin-right: 10px;
`

const CurrencycName = styled.span`
  font-size: 40px;
  margin-right: 20px;
`

const CurrencyRankBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const CurrencyRank = styled.span`
  text-transform: uppercase;
  text-decoration: underline;
`

const CurrencyRankNumber = styled.span``

const CurrencyHashAlg = styled.span`
  border-top: 1px solid;
  padding-top: 3px;
  font-size: 20px;
`

const RightSide = styled.div`
  width: 50%;
  padding: 20px;
  font-size: 18px;
  padding-right: 50px;
`

export const CurrencyInfo = ({ name, image, rank, hashalg, description }) => (
  <Wrapper>
    <LeftSide>
      <Currency>
        <CurrencyLogo src={image.small} alt="Logo" />
        <CurrencycName>{name}</CurrencycName>
        <CurrencyRankBlock>
          <CurrencyRank>rank</CurrencyRank>
          <CurrencyRankNumber>{rank}</CurrencyRankNumber>
        </CurrencyRankBlock>
      </Currency>
      {hashalg && (
        <CurrencyHashAlg>Hashing algorithm:{hashalg}</CurrencyHashAlg>
      )}
    </LeftSide>
    <RightSide dangerouslySetInnerHTML={{ __html: description.en }} />
  </Wrapper>
)

CurrencyInfo.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  rank: PropTypes.number,
  hashalg: PropTypes.string,
  description: PropTypes.object,
}

CurrencyInfo.defaultProps = {
  name: "",
  image: { small: "" },
  rank: 0,
  hashalg: "",
  description: { en: "" },
}
