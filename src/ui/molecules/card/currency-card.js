import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { Heart } from "@ui/atoms"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--primary);
  font-size: 20px;
  @media (max-width: 1340px) {
    font-size: 18px;
  }
  @media (max-width: 870px) {
    font-size: 16px;
  }
`

const CurrencyLogo = styled.img`
  width: 100px;
  height: 100px;
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 1340px) {
    width: 75px;
    height: 75px;
  }
  @media (max-width: 870px) {
    width: 50px;
    height: 50px;
  }
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

export const Currency = ({
  logo,
  name,
  price,
  rank,
  handleClick,
  like,
  auth,
}) => {
  return (
    <Wrapper>
      <CurrencyRank>{rank}</CurrencyRank>
      <CurrencyLogo src={logo} alt="Logo" />
      <CurrencyName>{name}</CurrencyName>
      <CurrencyPrice>${price}</CurrencyPrice>
      {auth && <Heart like={like} onClick={handleClick} />}
      <NavLink to={`/currencies/currency/${name}`}>link</NavLink>
    </Wrapper>
  )
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
  like: PropTypes.number,
  auth: PropTypes.bool,
}

Currency.defaultProps = {
  like: -1,
  handleClick: () => {},
  auth: false,
}
