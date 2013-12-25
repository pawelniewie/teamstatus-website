module BoardsHelper
	def board_public_url(board)
	  url = URI(ENV['BOARDS_URL'])
	  url.path = "/" + board.publicId
	  url.to_s
	end

	def board_edit_url(board)
	  url = URI(ENV['BOARDS_URL'])
	  url.path = "/" + board._id + "/edit"
	  url.to_s
	end

	def boards_engine
		@engine ||= new BoardsEngine
	end

	class BoardsEngine
		include HTTParty
		base_uri ENV['BOARDS_URL']

		def initilize
			@auth = {:username => 'console', :password => 'console'}
		end

		def schedule(widgetId)
			options = { :widgetId => widgetId }
			self.class.post('/schedule', { :body => options, :basic_auth => @auth })
		end
	end
end