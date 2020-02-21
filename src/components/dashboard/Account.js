import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Account = ({ account }) => {
  return (
    <Fragment>
        <div className="account-card">
            <p>Type: {account.accountType}</p>
            <p>Status: {account.status}</p>
            <p>Balance: N{account.balance}</p>
        </div>
    </Fragment>
  )
}

Account.propTypes = {
  account: PropTypes.object.isRequired,
}

export default Account;