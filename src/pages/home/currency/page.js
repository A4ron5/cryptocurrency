import React, { useEffect } from "react"
import { useStore } from "effector-react"
import PropTypes from "prop-types"
import { CommonTemplate } from "@features/common"
import { Container } from "@ui/templates"
import { adapter } from "@lib/common"
import { CurrencyInfo } from "@ui/molecules/card"
import { Loader } from "@features/common/loader"
import { ErrorCatcher } from "@features/common/molecules/error"
import { fetchedCurrencyInfo, $currencyinfo, $currencyinfoerror } from "./model"

export const CurrencyPage = ({ location }) => {
  const currencyinfo = useStore($currencyinfo)
  const error = useStore($currencyinfoerror)

  useEffect(() => {
    fetchedCurrencyInfo(adapter(location))
  }, [location])

  return (
    <CommonTemplate>
      <Container>
        <ErrorCatcher err={error}>
          <Loader effect={fetchedCurrencyInfo}>
            <CurrencyInfo
              name={currencyinfo.name}
              image={currencyinfo.image}
              rank={currencyinfo.market_cap_rank}
              hashalg={currencyinfo.hashing_algorithm}
              description={currencyinfo.description}
            />
          </Loader>
        </ErrorCatcher>
      </Container>
    </CommonTemplate>
  )
}

CurrencyPage.propTypes = {
  location: PropTypes.string.isRequired,
}
