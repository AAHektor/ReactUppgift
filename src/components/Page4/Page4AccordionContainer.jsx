import React from 'react'

const Page4AccordionContainer = () => {
  return (
    <div id="accordion">
      <div className="accordion-wrapper">

        <div className="accordion-container top-accordion">
          <input type="radio" name="accordion" id="first" />
          <label className="accordion-header top-label" for="first">
            <h4>

                Is any of my personal information stored in the App?
            </h4>
            <div>
                <span className="img-span-container">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
          </label>
            <div className="content">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor
                  ullamcorper. Viverra aliquam arcu, viverra et,
                  cursus. Aliquet pretium cursus adipiscing gravida
                  et consequat lobortis arcu velit. Nibh pharetra
                  fermentum duis accumsan lectus non. Massa
                  cursus molestie lorem scelerisque pellentesque.
                  Nisi, enim, arcu purus gravida adipiscing euismod
                  montes, duis egestas. Vehicula eu etiam quam
                  tristique tincidunt suspendisse ut consequat.
              <br/> <br/>
              Ornare senectus fusce dignissim ut. Integer
              consequat in eu tortor, faucibus et lacinia
              posuere. Turpis sit viverra lorem suspendisse
              lacus aliquam auctor vulputate. Quis egestas
              aliquam nunc purus lacus, elit leo elit facilisi.
              Dignissim amet adipiscing massa integer.</p>
            </div>
          </div>
        
          <div className="accordion-container middle-accordion">
            <input type="radio" name="accordion" id="second" />
            <label className="accordion-header" for="second">
                <h4>
                    What formats can I download my transaction history in?
                </h4>
              <div>
                  <span className="img-span-container">
                      <i className="fa-solid fa-chevron-down"></i>
                  </span>
              </div>
            </label>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum explicabo tempore distinctio quaerat necessitatibus excepturi...</p>
            </div>
          </div>

          <div className="accordion-container middle-accordion">
            <input type="radio" name="accordion" id="third" />
            <label className="accordion-header" for="third">
              <h4>

                  Can I schedule future transfers?
              </h4>
              <div>
                  <span className="img-span-container">
                      <i className="fa-solid fa-chevron-down"></i>
                  </span>
              </div>
            </label>
            <div className="content">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
            </div>
          </div>

          <div className="accordion-container middle-accordion">
            <input type="radio" name="accordion" id="forth" />
            <label className="accordion-header" for="forth">
              <h4>

                  When can I use Banking App services?
              </h4>
              <div>
                  <span className="img-span-container">
                      <i className="fa-solid fa-chevron-down"></i>
                  </span>
              </div>
            </label>
            <div className="content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, aliquam doloremque? Quo, laborum deserunt itaque, nostrum ullam eligendi omnis quam sequi quis voluptatum officiis autem, illo corrupti et quod. Est sint consequatur incidunt delectus eos quos aliquam repellendus iusto voluptate, hic at recusandae eligendi. Inventore obcaecati eveniet vero vitae odit. Nihil maxime adipisci aliquam harum nisi hic, quos ea quo!</p>
            </div>
          </div>

          <div className="accordion-container middle-accordion">
            <input type="radio" name="accordion" id="fifth" />
            <label className="accordion-header" for="fifth">
              <h4>

                  Can I create my own password that is easy for me to remember?
              </h4>
              <div>
                  <span className="img-span-container">
                      <i className="fa-solid fa-chevron-down"></i>
                  </span>
              </div>
            </label>
            <div className="content">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus inventore nisi praesentium porro ex dicta quo, animi necessitatibus doloremque ipsa!</p>
            </div>
          </div>

          <div className="accordion-container bottom-accordion">
            <input type="radio" name="accordion" id="sixth" />
            <label className="accordion-header bottom-label" for="sixth">
              <h4>

                  What happens if I forget or lose my password?
              </h4>
              <div>
                  <span className="img-span-container">
                      <i className="fa-solid fa-chevron-down"></i>
                  </span>
              </div>
            </label>
            <div className="content bottom-accordion">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur commodi tempore nulla aperiam quia tempora repellat delectus minima, quibusdam error ducimus accusamus praesentium ut inventore consequatur, similique sequi necessitatibus fugiat odio beatae maiores impedit! Quasi quaerat sed itaque id.</p>
            </div>
          </div>
      </div>
  </div>
  )
}

export default Page4AccordionContainer