import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Heart } from "@ui/atoms"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--primary);
  font-size: 20px;
`

const CurrencyLogo = styled.img`
  width: 100px;
  height: 100px;
  text-align: center;
  margin-bottom: 10px;
`
const CurrencyName = styled.span`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: var(--inverse);
  margin-bottom: 10px;
`

const CurrencyPrice = styled.span`
  text-transform: uppercase;
  color: #85bb65;
  margin-bottom: 20px;
`
const CurrencyRank = styled.span`
  position: absolute;
  left: 0;
  top: 0;
`

export const Currency = ({ logo, name, price, rank, handleClick }) => (
  <Wrapper>
    <CurrencyRank>{rank}</CurrencyRank>
    <CurrencyLogo src={logo} alt="Logo" />
    <CurrencyName>{name}</CurrencyName>
    <CurrencyPrice>${price}</CurrencyPrice>
    <Heart onClick={handleClick} />
  </Wrapper>
)

Currency.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  price: PropTypes.string,
  rank: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}

Currency.defaultProps = {
  name: "coin",
  logo: "logo",
  price: "100",
  rank: "1",
}
