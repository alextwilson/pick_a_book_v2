defmodule PickABookWeb.BookView do
  use PickABookWeb, :view
  alias PickABookWeb.BookView

  # def render("index.json", %{books: books}) do
  #   %{data: render_many(books, BookView, "book.json")}
  # end
  #
  # def render("show.json", %{book: book}) do
  #   %{data: render_one(book, BookView, "book.json")}
  # end
  #
  # def render("book.json", %{book: book}) do
  #   %{id: book.id,
  #     title: book.title,
  #     author: book.author,
  #     genre: book.genre,
  #     description: book.description}
  # end

  def render("index.json", %{books: books}) do
  %{
    books: Enum.map(books, &books_json/1)
  }
end

# show single blog
def render("show.json", %{book: book}) do
  %{
    book: books_json(book)
  }
end

def books_json(book) do
  %{
    title: book.title,
    description: book.description,
    author: book.author,
    genre: book.genre
  }
end
end
