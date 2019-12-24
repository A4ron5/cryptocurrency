import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  height: 100px;
  background: var(--primary);
  border: 1px solid var(--primary-text);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

const CurrencyLogo = styled.img`
  height: 100px;
  line-height: 100px;
  text-align: center;
`
const CurrencyName = styled.span`
  height: 50px;
  line-height: 50px;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--inverse);
  font-size: 24px;
  text-align: center;
`

const CurrencyPrice = styled.span`
  height: 50px;
  line-height: 50px;
  text-transform: uppercase;
  font-size: 20px;
  color: #85bb65;
  text-align: center;
`
const CurrencyRank = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
`

export const Currency = ({ logo, name, price, rank }) => (
  <Wrapper>
    <CurrencyLogo src={logo} alt="Logo" />
    <CurrencyName>{name}</CurrencyName>
    <CurrencyPrice>${price}</CurrencyPrice>
    <CurrencyRank>#{rank}</CurrencyRank>
  </Wrapper>
)

Currency.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  price: PropTypes.string,
  rank: PropTypes.string,
}

Currency.defaultProps = {
  name: "coin",
  logo: "logo",
  price: "100",
  rank: "1",
}
