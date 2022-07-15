import Error from './Error/Error'
import useGetInput from './hooks/useGetInput'

const LoginPass = () => {
  const email = useGetInput('', { isEmpty: true, isValidEmail: true })
  const password = useGetInput('', { isEmpty: true, isLength: 6 })

  return (
    <div>
      <form>
        <h1>Валидация формы</h1>
        <Error dirty={email.dirty} error={email.valid} />
        <input
          name="email"
          type="text"
          placeholder="Введите адрес почты"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
        />
        <Error dirty={password.dirty} error={password.valid} />
        <input
          name="password"
          type="password"
          placeholder="Введите апроль"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
        />
      </form>
    </div>
  )
}

export default LoginPass
