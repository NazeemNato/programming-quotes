import React, {Component} from 'react'
import Quotes from '../components/main/Quotes'
import AuthorBox from '../components/main/AuthorBox'
import translate from '../shared/translate'

export default class Author extends Component {
  render() {
    const author = this.props.match.params.name.replace(/_/g, ' ')
    const { language, allQuotes, password, phrase } = this.props
    const filtered = allQuotes
      .filter(q => q.author === author)
      .filter(quote => quote[language] && quote[language].toLowerCase().includes(phrase.toLowerCase()))

    return (
      <main>
        <h1>{author}</h1>
        <AuthorBox author={author} allImages={this.props.allImages} />
        {phrase && <small>{translate('SHOWING_RESULTS')} "{phrase}":</small>}
        <Quotes language={language} loaded={allQuotes.length} currentQuotes={filtered} password={password} />
      </main>
    )
  }
}