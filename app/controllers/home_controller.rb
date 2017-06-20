class HomeController < ApplicationController
  def index
  end
  def test
  end
  def main
  end
  def show
  	@searched_book_title = params[:book]
    @books = Book.all
    @book_list = []
    @books.each do |book|
      if book.title.include? @searched_book_title
        @book_list.push(book)
      end
    end
  end
  def obj
    shelf_id = params[:shelf_id]
    @shelf = Shelf.find(shelf_id)
    puts @shelf
  end
end
