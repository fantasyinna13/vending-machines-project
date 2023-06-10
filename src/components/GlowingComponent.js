import React from 'react'
import { Link } from 'react-router-dom';

export default function GlowingComponent() {
  return (
    <section class="glowingSection">
  <div class="glowingContainer">
    <div className="glowingCard">
    <div className="glowingContent">
      <p className="glowingHeading">Искате да научите всички тънкости на занаята?
      </p><p className="glowingText">
       Освен, че предлагаме улеснение в поддръжката на вендинг машини, сме 
       събрали и организирали най-важната информация, от която може да има нужда 
       всеки, който се занимава с вендинг бизнеса или който тепърва навлиза в него.
       Прочетете нашите статии и станете най-добрите. 
      </p>
      <button className="glowingButton">Прочетете повече</button>
    </div>
  </div>
  </div>
  </section>

  )
}
