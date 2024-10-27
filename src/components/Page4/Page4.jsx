import React from 'react'
import Page4FaqContainer from './Page4FaqContainer'
import Page4ContactContainer from './Page4ContactContainer'
import Page4EmptyContainer from './Page4EmptyContainer'
import Page4AccordionContainer from './Page4AccordionContainer'
import Page4ButtonContainer from './Page4ButtonContainer'
import Page4NewsletterContainer from './Page4NewsletterContainer'

const Page4 = () => {
  return (
    <section id="page-4">
      <div className='container'>

        <Page4FaqContainer />
        <Page4ContactContainer />
        <Page4EmptyContainer />
        <Page4AccordionContainer />
        <Page4ButtonContainer />
        <Page4NewsletterContainer />
      </div>

    </section>
  )
}

export default Page4