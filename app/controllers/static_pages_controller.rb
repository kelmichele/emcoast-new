class StaticPagesController < ApplicationController
  helper_method :event_year

	def event_year
	  @event_year = '2021'
  end
end
