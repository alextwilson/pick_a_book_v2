defmodule PickABookWeb.UserControllerTest do
  use PickABookWeb.ConnCase

  alias PickABook.Accounts

  @invalid_attrs %{email: nil, username: nil, password: nil, password_confirmation: nil}

  describe "create user" do
    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, user_path(conn, :create), user: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end
end
