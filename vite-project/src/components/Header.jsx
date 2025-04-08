import clockImg from '../img/clock.png'
import titleImg from "../img/title.png"
import quotesImg from "../img/quotes.png"
function Component(){

  return(
    <>
      <header>
        <h1>
            <img className="img_clock" src={clockImg} alt="배경 시계 이미지"/>
            <img className="img_title" src={titleImg} alt="1만 시간의 법칙"/>
            <span className="a11y-hidden">1만 시간의 법칙</span>
        </h1>
      </header>
      <main>
      <p className="intro_saying">연습은 어제의 당신보다 당신을 더 낫게 만든다.</p>
        <section className="intro">
        <h2 className="a11y-hidden">1만 시간의 법칙 설명</h2>
            <img className="quotes" src={quotesImg} alt="배경 따옴표 이미지"/>
            <p className="explain">
                <strong>1만 시간의 법칙</strong>은<br />
                어떤 분야의 전문가가 되기 위해서는<br />
                최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </p>
        </section>

      </main>
    </>
  )
   
  
}

export default Component;