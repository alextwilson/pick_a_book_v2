defmodule PickABookWeb.BookControllerTest do
  use PickABookWeb.ConnCase

  alias PickABook.Books
  alias PickABook.Books.Book

  @create_attrs %{author: "some author", description: "some description", genre: "some genre", title: "some title"}
  @update_attrs %{author: "some updated author", description: "some updated description", genre: "some updated genre", title: "some updated title"}
  @invalid_attrs %{author: nil, description: nil, genre: nil, title: nil}

  def fixture(:book) do
    {:ok, book} = Books.create_book(@create_attrs)
    book
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "delete book" do
    setup [:create_book]

    test "deletes chosen book", %{conn: conn, book: book} do
      conn = delete conn, book_path(conn, :delete, book)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, book_path(conn, :show, book)
      end
    end
  end

  defp create_book(_) do
    book = fixture(:book)
    {:ok, book: book}
  end
end
