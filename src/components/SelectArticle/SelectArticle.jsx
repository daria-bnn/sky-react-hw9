import dataArticles from './data/dataArticles'

const { useState } = require('react')

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
            <option value="">Выберите название статьи</option>
            <option value="catsMeow">Как мурчат котики</option>
            <option value="catsPaws">Почему котики мнут лапками</option>
            <option value="catsBox">Почему котики любят коробки</option>
          </select>
        </label>
      </form>
      {header && <p>{dataArticles[`${header}`]}</p>}
    </div>
  )
}

export default SelectArticle
