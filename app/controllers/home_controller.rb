class HomeController < ActionController::Base
  def index
    render file: 'public/packs/index.html'
  end
end
