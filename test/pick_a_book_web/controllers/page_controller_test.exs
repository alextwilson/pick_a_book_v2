defmodule PickABookWeb.PageControllerTest do
  use PickABookWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "<div id=\"main\">"
  end
end
