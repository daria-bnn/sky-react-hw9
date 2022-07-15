import PropTypes from 'prop-types'

const Error = ({ dirty, error }) => {
  if (!dirty && error) return null

  return <div>{error}</div>
}

Error.propTypes = {
  dirty: PropTypes.bool,
  error: PropTypes.string,
}

Error.defaultProps = {
  dirty: false,
  error: '',
}
export default Error
