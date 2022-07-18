import { useState } from 'react'
import dataArticles from './data/dataArticles'

const dataOptions = [
  { value: '', textHeader: 'Выберите название статьи' },
  {
    value: 'catsMeow',
    textHeader: 'Как мурчат котики',
  },
  {
    value: 'catsPaws',
    textHeader: 'Почему котики мнут лапками',
  },
  { value: 'catsBox', textHeader: 'Почему котики любят коробки' },
]

const SelectArticle = () => {
  const [header, setHeader] = useState('')

  const handleFieldChange = (event) => {
    const { target } = event

    setHeader(target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="header-select">
          Выберете название статьи
          <select
            id="header-select"
            name="articleSelect"
            value={header}
            onChange={handleFieldChange}
          >
            {dataOptions.map((el) => (
              <option key={el.value} value={el.value}>
                {el.textHeader}
              </option>
            ))}
          </select>
        </label>
      </form>
      {header && <p>{dataArticles[header]}</p>}
    </div>
  )
}

export default SelectArticle
