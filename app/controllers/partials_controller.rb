class PartialsController < ApplicationController

	def show
		render partial: params[:partial_id]
	end

	def widget
		render "integrations/#{params[:widget_id]}/config", :layout => false , :content_type => 'text/html'
	end

end
