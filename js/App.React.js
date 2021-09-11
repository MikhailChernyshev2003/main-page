
const e = React.createElement;
const f = React.Fragment;

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return e('div', {className:"page"}, 
      e('main', {className:"content"},
        e('section', {className:"advertisement"},
          e('div', { className: 'skapi-background' },
            e('img', { className: 'background', src: 'https://skapi.ru/resources/static/src/media/images/background.png' }),
            e('img', { id: 'wave-1', src: 'https://skapi.ru/resources/static/src/media/images/wave-1.png' }),
            e('img', { id: 'wave-2', src: 'https://skapi.ru/resources/static/src/media/images/wave-2.png' }),
            e('img', { id: 'wave-3', src: 'https://skapi.ru/resources/static/src/media/images/wave-3.png' }),
            e('img', { id: 'wave-4', src: 'https://skapi.ru/resources/static/src/media/images/wave-4.png' }),
            e('img', { id: 'wave-5', src: 'https://skapi.ru/resources/static/src/media/images/wave-5.png' })
          ),
          e('header', {className:"header"},
            e('img', {className:"header__icon", src:" media/svg/logo.svg"}),
            // e('img', {className:"language", src:"./images/russia.svg"}),
            e('div', {className:"header__buttons",},
              e('button', {className:"header__button-registration"}, 'Регистрация'),
              e('button', {className:"header__button-login"}, 'ВХОД'),
              e('button', {className:"header__button-registration-login"}, "РЕГИСТРАЦИЯ И ВХОД")
              )
            ),
          e('div', {className:"advertisement__container"},
            e('p', {className:"advertisement__name"}, "Skapi.ru"),
            e('h2', {className:"advertisement__title"}, "Сайт для вашего бизнеса за пару минут"),
            e('p', {className:"advertisement__subtitle"}, "Мы позаботились обо всем, вам нужно лишь добавить товар"),
              // e('button', {className:"button-registration"}, "Регистрация"),
            e('button', {className:"advertisement__button-create-site"}, "Создать сайт"),
            e('img', {className:"advertisement__image", src:"media/svg/macbook.svg"}),
            e('img', {className:"mobile__advertisement__image", src:"media/svg/mobile-macbook.svg"}),
            e('div', {className:"button__container"},
              e('button', {className:"advertisement__button-create-site-mobile"}, "Создать сайт")
            )
          ),  
        ),
        e('section', {className:"cards"},
          e('div', {className:"cards__column first-column"},
            e('div',{className:"cards__column-element transparent"},
              e('p', {className:"cards__column-element__title"}, "Наши преимущества"),
              e('p', {className:"cards__column-element__text"}, "Вы получаете неограниченное количество сайтов,которые удобно использовать на разных устройствах"),
              e('button', {className:"cards__column-element__button"}, "СОЗДАТЬ САЙТ")
            ),
            e('div',{className:"cards__column-element cards__column-element__hover"},
              e('img', {className:"cards__column-element__image", src:"media/svg/statistic.svg"}),
              e('p', {className:"cards__column-element__title"}, "Статистика продаж и посейщений"),
              e('p', {className:"cards__column-element__text"}, "На каждом из своих сайтов клиент может наблюдать за статистикой продаж сайта, его посейщений и других аспектов"),
            ),
            e('div',{className:"cards__column-element cards__column-element__hover"},
              e('img', {className:"cards__column-element__image", src:"media/svg/infinity.svg"}),
              e('p', {className:"cards__column-element__title"}, "Неограниченное количество сайтов"),
              e('p', {className:"cards__column-element__text"}, "Каждый клиент может создать столько сайтов, сколько ему потребуется"),
            ),
          ),
          e('div', {className:"cards__column"},
            e('div',{className:"cards__column-element cards__column-element__hover"},
            e('img', {className:"cards__column-element__image", src:"media/svg/tb.svg"}),
            e('p', {className:"cards__column-element__title"}, "1 терабайт HDD"),
            e('p', {className:"cards__column-element__text"}, "Для своего сайта вы можете выбрать один из 30 уникальных и продуманных шаблонов"),
            ),
            e('div',{className:"cards__column-element cards__column-element__hover"},
              e('img', {className:"cards__column-element__image", src:"media/svg/seo.svg"}),
              e('p', {className:"cards__column-element__title"}, "Единоразовая SEO оптимизация вашего сайта"),
              e('p', {className:"cards__column-element__text"}, "Наши специальсты полность отвечают за поисковую оптимизацию каждого сайта"),
            ),
            e('div',{className:"cards__column-element last transparent"},
              e('p', {className:"cards__column-element__title"}, "Принцип работы"),
              e('p', {className:"cards__column-element__text"}, "У нашей платформы простой и интуитивно понятный конструктор, без лишних деталей и прочих ненужных аспектов, только то, что будет на сайте пользователя и ничего более."),
              e('button', {className:"cards__column-element__button green"}, "ПОПРОБОВАТЬ")
            ),
          ),
          e('div', {className:"cards__column last-column"},
            e('div',{className:"cards__column-element cards__column-element__hover"},
              e('img', {className:"cards__column-element__image", src:"media/svg/time.svg"}),
              e('p', {className:"cards__column-element__title"}, "Быстрое создание сайта"),
              e('p', {className:"cards__column-element__text"}, "На нашей платформе можно создать сайт за пару минут, благодаря продуманной системе конструктора"),
            ),
            e('div',{className:"cards__column-element cards__column-element__hover"},
              e('img', {className:"cards__column-element__image", src:"media/svg/repair.svg"}),
              e('p', {className:"cards__column-element__title"}, "Техническая поддержка 24/7"),
              e('p', {className:"cards__column-element__text"}, "Команда наших специалистов постоянно контролирует состояние сайтов, сделанных на Skapi.ru и решает любые возникающие проблемы"),
            ),
          ),
          e('div', {className:"cards__mobile"},
            e('p', {className:"cards__mobile-title"}, "Наши преимущества"),
            e('p', {className:"cards__mobile-subtitle"}, "Вы получаете неограниченное количество сайтов,которые удобно использовать на разных устройствах"),
            e('img', {className:"cards__mobile-container-element-slider", src:"media/svg/slider1.svg"}),
            e('div', {className:"cards__mobile-container"},
              e('div', {className:"cards__mobile-container-element"},
                e('p', {className:"cards__mobile-container-element-title"}, "1 терабайт HDD"),
                e('img', {className:"cards__mobile-container-element-image", src:"media/svg/mobile-tb.svg"}),
                e('p', {className:"cards__mobile-container-element-subtitle"}, "Для своего сайта вы можете выбрать один из 30 уникальных и продуманных шаблонов"),
               
              ),
              e('div', {className:"cards__mobile-container-element"},
                // e('img', {className:"cards__mobile-container-element-slider", src:"media/svg/slider2.svg"}),
                e('p', {className:"cards__mobile-container-element-title"}, "Неограниченное количество сайтов"),
                e('img', {className:"cards__mobile-container-element-image", src:"media/svg/mobile-infinity.svg"}),
                e('p', {className:"cards__mobile-container-element-subtitle"}, "Каждый клиент может создать столько сайтов, сколько ему потребуется"),
                
              ),
              e('div', {className:"cards__mobile-container-element"},
                // e('img', {className:"cards__mobile-container-element-slider", src:"media/svg/slider3.svg"}),
                e('p', {className:"cards__mobile-container-element-title"}, "Статистика продаж и посейщений"),
                e('img', {className:"cards__mobile-container-element-image", src:"media/svg/mobile-statistic.svg"}),
                e('p', {className:"cards__mobile-container-element-subtitle"}, "На каждом из своих сайтов клиент может наблюдать за статистикой продаж сайта, его посейщений и других аспектов"),
                
              ),
              e('div', {className:"cards__mobile-container-element"},
                // e('img', {className:"cards__mobile-container-element-slider", src:"media/svg/slider4.svg"}),
                e('p', {className:"cards__mobile-container-element-title"}, "Единоразовая SEO оптимизация сайта"),
                e('img', {className:"cards__mobile-container-element-image", src:"media/svg/mobile-seo.svg"}),
                e('p', {className:"cards__mobile-container-element-subtitle"}, "Наши специальсты полность отвечают за поисковую оптимизацию каждого сайта"),
                
              ),
              e('div', {className:"cards__mobile-container-element"},
                // e('img', {className:"cards__mobile-container-element-slider", src:"media/svg/slider5.svg"}),
                e('p', {className:"cards__mobile-container-element-title"}, "Быстрое создание сайта"),
                e('img', {className:"cards__mobile-container-element-image", src:"media/svg/mobile-time.svg"}),
                e('p', {className:"cards__mobile-container-element-subtitle"}, "На нашей платформе можно создать сайт за пару минут, благодаря продуманной системе конструктора"),
                
              ),
              e('div', {className:"cards__mobile-container-element"},
                // e('img', {className:"cards__mobile-container-element-slider", src:"media/svg/slider6.svg"}),
                e('p', {className:"cards__mobile-container-element-title"}, "Техническая поддержка 24/7"),
                e('img', {className:"cards__mobile-container-element-image", src:"media/svg/mobile-repair.svg"}),
                e('p', {className:"cards__mobile-container-element-subtitle"}, "Команда наших специалистов постоянно контролирует состояние сайтов, сделанных на Skapi.ru и решает любые возникающие проблемы"),
                
              )
            )
          )
        ),
        e('section', {className:"principles"},
          e('img', {className:"principles__image", src:"media/svg/123withoutLogos.svg"}),
          e('p', {className:"mobile__principles__title"}, "Принцип работы"),
          e('p', {className:"mobile__principles__subtitle"}, "У нашей платформы простой и интуитивно понятный конструктор, без лишних деталей и прочих ненужных аспектов, только то, что будет на сайте пользователя и ничего более."),
          e('div',{},
            e('img', {className:"mobile__principles__image", src:"media/svg/mobile-poloska.svg"}),
            e('div', {className:"principles__card-container"},
              e('div', {className:"principles__card first-card"},
                e('img', {className:"principles__card-image", src:"media/svg/box.svg"}),
                e('p', {className:"principles__card-title"}, "Добавление товара"),
                e('p', {className:"principles__card-text"}, "Создание карточки товара, добавление его изображений, описания, выставление цены.")
              ),
              e('div', {className:"principles__card second-card"},
                e('img', {className:"principles__card-image", src:"media/svg/papka.svg"}),
                e('p', {className:"principles__card-title"}, "Сортировка"),
                e('p', {className:"principles__card-text"}, "Присвоение товару определенной категории. ")
              ),
              e('div', {className:"principles__card third-card"},
                e('img', {className:"principles__card-image", src:"media/svg/global.svg"}),
                e('p', {className:"principles__card-title"}, "Домен и название"),
                e('p', {className:"principles__card-text"}, "Выбор уникального названия и домен для сайта.")
              )
            )
          ), 
        ),
        e('section', {className:"subscription"},
          e('div', {className:"mobile-subscription__card"},
            e('p', {className:"mobile-subscription__card-title"}, "Наши тарифы"),
            e('p', {className:"mobile-subscription__card-subtitle"}, "СТАНДАРТ -", 
              e('p', {className:"mobile-subscription__card-price"}, "1₽ В МЕСЯЦ"),
            ),
            e('p', {className:"mobile-subscription__card-text"}, "Единстрвенный тариф для нашей системы - стандарт с ним вы платите всего лишь один рубль в месяц, используя весь наш функционал в полной мере."),
            e('img', {className:"mobile-subscription__image", src:"media/svg/mobile-dira.svg"}),
            e('button', {className:"mobile-subscription__card-button"}, "ПОПРОБОВАТЬ")
          ),
          e('img', {className:"subscription__image", src:"media/svg/dira2.svg"}),
          // e('img', {src:"media/svg/blur-card.svg"}),
          e('div', {className:"subscription__card"},
            e('p', {className:"subscription__card-title"}, "Наши тарифы"),
            e('p', {className:"subscription__card-subtitle"}, "СТАНДАРТ -"),
            e('p', {className:"subscription__card-price"}, "1₽ В МЕСЯЦ"),
            e('p', {className:"subscription__card-text"}, "Единстрвенный тариф для нашей системы - стандарт с ним вы платите всего лишь один рубль в месяц, используя весь наш функционал в полной мере."),
            e('button', {className:"subscription__card-button"}, "ПОПРОБОВАТЬ")
          ),
          // e('img', {src:"media/svg/blur-card.svg"})
        )
      ),
        e('footer', {className:"footer"},
          e('div', {className:"copyright"},
            e('p', {className:"copyright__title"}, "Skapi"),
            e('img', {className:"copyright__icon", src:" media/svg/logo.svg"}),
            e('p', {className:"copyright__text"}, "Все права защищены скапи скапи скапи скапи")
          ),
          e('div', {className:"contacts"},
            e('p', {className:"contacts__title"}, "АДРЕС"),
            e('p', {className:"contacts__text", style:{marginBottom:"24px"}}, "© 2021 ANIMADK. Москва, Волоколамское шоссе, д.2"),
            e('div', {className:"contacts__container"},
              e('p', {className:"contacts__title"}, "КОНТАКТЫ"),
              e('p', {className:"contacts__text"}, "+7 (495) 488-50-94"),
              e('p', {className:"contacts__text"}, "SALES@ITEYE.RU")
            ),
          ),
          e('div', {className:"mobile__about-us"},
            e('p', {className:"about-us__title"}, "О НАС"),
            e('p', {className:"about-us__text"}, "Вы получаете неограниченное количество сайтов,которые удобно использовать на разных устройствах")
          ),
          e('div', {className:"social__images"},
            e('img', {className:"social__link-image", src:"media/svg/facebook.svg"}),
            e('img', {className:"social__link-image", src:"media/svg/instagram.svg"}),
            e('img', {className:"social__link-image last-image", src:"media/svg/vk.svg"}),
            e('p', {className:"social__copyright"}, "@ Все права защищены скапи скапи скапи")  
          ),
          e('div', {className:"social"},
            e('p', {className:"social__text"}, "МЫ В СОЦСЕТЯХ"),
            e('div', {className:"social__link"}, 
              e('img', {className:"social__link-image", src:"media/svg/facebook.svg"}),
              "Facebook"
            ),
            e('div', {className:"social__link"}, 
              e('img', {className:"social__link-image", src:"media/svg/instagram.svg"}),
              "Instagram"
            ),
            e('div', {className:"social__link"}, 
              e('img', {className:"social__link-image", src:"media/svg/vk.svg"}),
              "ВКонтакте"
            )  
          ),
          e('div', {className:"about-us"},
            e('p', {className:"about-us__title"}, "О НАС"),
            e('p', {className:"about-us__text"}, "Вы получаете неограниченное количество сайтов,которые удобно использовать на разных устройствах")
          )
        )
    );
  }

}

ReactDOM.render(e(App), document.getElementById('root'));
