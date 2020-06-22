Rails.application.routes.draw do
  root 'static_pages#home'

  get '/page', to: 'static_pages#page'
  get '/home-alt', to: 'static_pages#home-alt'
  get '/sponsors', to: 'static_pages#sponsors'
  get '/registration', to: 'static_pages#poker-run2020'
  # get '/registration', to: 'static_pages#registration'
  get '/register-now', to: 'static_pages#register-now'
  get '/stops', to: 'static_pages#stops'
  get '/events', to: 'static_pages#events'
  get '/gallery', to: 'static_pages#gallery'
  get '/tickets', to: 'static_pages#tickets'
  get '/contact', to: 'static_pages#contact'
  get '/ec-foundation', to: 'static_pages#ec-foundation'
  get '/register-ruby', to: 'static_pages#register-ruby'
  get '/lodging', to: 'static_pages#lodging'
  get '/payment', to: 'static_pages#payment'
  get '/party-tickets', to: 'static_pages#party-tickets'
  get '/safety-rules', to: 'static_pages#safety-rules'
  get '/slips-parking', to: 'static_pages#slips-parking'
  get '/be-a-sponsor', to: 'static_pages#be-a-sponsor'
  get '/vip-promo', to: 'static_pages#vip-promo'
  get '/extra-hand-promo', to: 'static_pages#extra-hand-promo'
  get '/poker-run2020', to: 'static_pages#poker-run2020'


  get '/volunteer', to: 'volunteers#new', as: 'volunteer'
  post '/volunteer', to: 'volunteers#create'

  get '/fb', to: 'links#fb'
  get '/insta', to: 'links#insta'
  get '/twitter', to: 'links#twitter'
  get '/youtube', to: 'links#youtube'
  get '/flbc', to: 'links#flbc'
  get '/cic', to: 'links#cic'
  get '/arc', to: 'links#arc'
  get '/allsports', to: 'links#allsports'
  get '/ejyc', to: 'links#ejyc'

  # emerald stops
  get '/bay_marina', to: 'stops#bay_marina'
  get '/nl_yacht', to: 'stops#nl_yacht'
  get '/buff', to: 'stops#buff'
  get '/juan', to: 'stops#juan'
  get '/bamboo', to: 'stops#bamboo'
  get '/fud', to: 'stops#fud'
  get '/mb', to: 'stops#mb'
  get '/legend', to: 'stops#legend'
  get '/two_george', to: 'stops#two_george'
  get '/gulfob', to: 'stops#gulfob'
  # ruby stops
  get '/boshamp', to: 'stops#boshamp'
  get '/cap_choice', to: 'stops#cap_choice'
  get '/fwbl', to: 'stops#fwbl'
  get '/schoon', to: 'stops#schoon'
  get '/ernies', to: 'stops#ernies'
  get '/gulf', to: 'stops#gulf'
  get '/ajs', to: 'stops#ajs'

  # get '/', to: 'static_pages#'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
