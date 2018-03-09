defmodule PickABookWeb.Router do
  use PickABookWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PickABookWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api", PickABookWeb do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
    # resources "/books", BookController, except: [:new, :edit]
    get "/books", BookController, :index
    post "/books", BookController, :create
    get "/books/:id", BookController, :show
    delete "/books/:id", BookController, :delete
    put "/books/:id", BookController, :update
  end


end
