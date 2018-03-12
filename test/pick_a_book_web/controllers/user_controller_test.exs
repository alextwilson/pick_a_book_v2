defmodule PickABookWeb.UserControllerTest do
  use PickABookWeb.ConnCase

  alias PickABook.Accounts
  alias PickABook.Accounts.User
  alias PickABook.Accounts.APICall

  @create_attrs %{email: "email@email.com", username: "username", password: "somepassword", password_confirmation: "somepassword"}
  @update_attrs %{email: "some updated email", password_hash: "some updated password_hash", username: "some updated username"}
  @invalid_attrs %{email: nil, username: nil, password: nil, password_confirmation: nil}

  def fixture(:user) do
    {:ok, user} = Accounts.create_user(@create_attrs)
    user
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "create user" do

    test "renders user when data is valid", %{conn: conn} do
      conn = post conn, user_path(conn, :create), user: @create_attrs
      response = json_response(conn, 200)
      assert response.jwt == "jwt"
      # assert %{"id" => id} = json_response(conn, 200)
      #
      # conn = get conn, user_path(conn, :show, id)
      # assert json_response(conn, 200)["data"] == %{
      #   "id" => id,
      #   "email" => "some email",
      #   "password_hash" => "some password_hash",
      #   "username" => "some username"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, user_path(conn, :create), user: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  defp create_user(_) do
    user = fixture(:user)
    {:ok, user: user}
  end
end
