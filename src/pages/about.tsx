import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

function About() {
  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">За Сайта</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  {' '}
                  <h5>Аврора: Писателката на странствания</h5>
                  <p>
                    Здравейте на всички мои колеги пътешественици, почитатели на храната и любители
                    на историите - Добре дошли в моя пътепис - дигитален гоблен, в който с нишки от
                    проза вплитам приключенията си из континентите. Аз съм Аврора, вашият странстващ
                    домакин, водач и съмишленик в търсенето на скритите съкровища на света. Тук, в
                    това уютно кътче на интернет, споделям разкази за случайни срещи, за вкусове,
                    които са танцували по небцето ми, и за пейзажи, които са откраднали дъха ми.
                  </p>
                  <p>
                    Неутолимият ми сърбеж за пътуване започна като шепот на любопитство от изтритите
                    книги и лъскавите страници на списанията на National Geographic, който по-късно
                    се превърна в ревяща страст. След като получих диплома по английски език, се
                    впуснах в опияняващия свят на пътуванията и писането и така започна моето
                    пътешествие като Wanderlust Scribe.
                  </p>
                  <p>
                    В продължение на повече от десетилетие се скитах по шумните градски улици и
                    спокойните селски пътеки, всяка от които носеше свой собствен разказ, чакащ да
                    бъде записан. Пътуването за мен не е просто пресичане на граници или отбелязване
                    на дестинации; то е нишка в тъканта на личностното израстване, безкрайно
                    пътуване, което едновременно смирява и възвисява.
                  </p>
                  <p>
                    Всяка експедиция е нова глава, всеки град е герой, всяко хранене е обрат в
                    сюжета. Чрез блога си се стремя да ви увлека с истории, родени от магията на
                    пътешествията. Защото именно в тези разкази откриваме връзката, разбирането и
                    общия пулс на човечеството.
                  </p>
                  <h5>Кулинарни пътешествия</h5>
                  <p>
                    Да поговорим за храната - универсалният език, който не се нуждае от превод.
                    Кулинарните ми търсения съставляват значителна част от пътуванията ми. Има
                    несравнима радост в това да се насладиш на просто, традиционно ястие, приготвено
                    от ръце, които са усвоили занаята си от предишни поколения. Хапвал съм рамен в
                    Токио, гъделичкал съм вкусовите си рецептори с парещата топлина на индийските
                    подправки и съм споделял багети под парижкия хоризонт. Всяка хапка носи история,
                    част от културното наследство, което ми беше предоставено с щедрост и топлина.
                  </p>
                  <p>
                    Изкуството на готвенето и храненето е ритуал; то е поезия. В този блог ще
                    откриете ярки описания на гурме бягства, които се отнасят както до хората, които
                    ги създават, така и до вкусовете, които предават. Ако обичате храната толкова,
                    колкото и аз, всяка публикация обещава сетивно претоварване, което ще ви накара
                    да резервирате следващото си кулинарно приключение.
                  </p>
                  <h5>Пътят на писателя</h5>
                  <p>
                    Словите са превозните средства на пътуването на моята душа. Открих, че никое
                    друго средство не превъзхожда сърцата и умовете така, както добре подготвеното
                    повествование. Писането за мен прилича на рисуване - всяко изречение нанася цвят
                    върху платното, като съживява същността на дадено място или момент. Дълбоко в
                    прегръдките на пътуването откривам винетки, които изискват да бъдат споделени,
                    уроци, които са променили гледната ми точка, и забавления, които са твърде
                    добри, за да ги запазя за себе си.
                  </p>
                  <p>
                    Посредством моите разкази ще се сблъскате със същата разтърсваща необходимост да
                    тръгнете, да изследвате, да вкусите и да прегърнете необятното непознато. Този
                    блог служи като свидетелство за моята вяра, че всеки от нас има в себе си
                    изследовател, искра, която се разпалва от очарованието на хоризонта.
                  </p>
                  <h5>Пътища, изминати, пътища в очакване</h5>
                  <p>
                    Сърцето ми е препускало по уличките на Маракеш и е намирало покой сред
                    норвежките фиорди. Обикалял съм рушащите се руини на древни цивилизации и съм се
                    удивлявал на небостъргачите, които стигат до облаците. Шепнещите пясъци на
                    Сахара, гръмотевичният рев на водопада Игуасу и мистичното спокойствие на
                    Хималаите са само част от природните чудеса, които са говорили на душата ми.
                  </p>
                  <p>
                    И все пак пътищата пред мен се простират безкрайно. Светът примамва с мисли,
                    които тепърва предстоят да бъдат изживени, с пътеки, които тепърва ще бъдат
                    утъпкани. В това се крие красотата на пътуването - безкрайният гоблен, който
                    продължава да примамва със скритите си шевици и неизследвани кътчета.
                  </p>
                  <h5>Ангажираност и общност</h5>
                  <p>
                    Тази солилокия може и да е моя собствена, но диалогът е споделен. Моето пътуване
                    се преплита с тези от вас, които четат и протягат ръка. Вашите коментари, имейли
                    и съобщения са вятърът под крилата ми, който ме води към следващата ми
                    дестинация. Чрез споделянето на истории и препоръки ние създаваме общност от
                    изследователи, сродни души, обединени от общата ни любов към откривателството.
                  </p>
                  <p>
                    Същността на моя блог не е само в разказването на моите хроники, а във
                    взаимодействието, споделянето на съвети и колективната мъдрост, която събираме
                    по пътя. Така че, независимо дали сте редовен летец, амбициозен номад или
                    пътешественик от креслото, ви каня да се присъедините към разговора. Споделете
                    историите си, задайте въпросите си и нека заедно да странстваме по тази красива
                    планета.
                  </p>
                  <h5>Покана</h5>
                  <p>
                    Така че с отворени обятия и отворено сърце ви каня в моето лоно. Прегледайте
                    архивите, вникнете в ескападите, усетете вкуса и текстурата, вплетени във всеки
                    запис. С всяка дума споделям частица от безкрайната красота, която този свят
                    може да предложи, и всички лични трансформации, които се случват по време на
                    пътуването.
                  </p>
                  <p>
                    Добре дошли в хрониката на един живот, омагьосан от странстването. Добре дошъл,
                    скъпи читателю, в пътеписите на Аврора, Писателката на странстванията.
                  </p>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
}

export default About;
