# PickABook

### Overview
This is a web application that allows users to exchange their unwanted used books with other users.

Created by [Giada Simonetti](https://github.com/GiadaSimonetti) || [Agata Golebiewska](https://github.com/MissDove) || [Lewis Moore](https://github.com/lewmoore) || [Benjamin Pourian](https://github.com/bpourian) || [Alex Wilson](https://github.com/alextwilson) || [Alexandra Fina](https://github.com/AlexandraGF)

### Tech Stack
This application was build with:
* Elixir
* Phoenix
* ReactJs

Tested with:
* ExUnit
* Jest
* Enzyme

The user stories for PickABook are as follows:

### User Stories

#### MVP
```
As a user
So I can make my book available to other users
I would like to be able to add a book
```

#### Version 1
```
As a user
So I can see what books are available
I would like to see a list of all books
```
```
As a user
So I can see more details about a book
I would like to see an individual book page
```
```
As a user
So I can remove my books
I would like to be able to delete a book
```

#### Version 2
```
As a user
So I can use PickABook
I would like to be able to register
```
```
As a user
So I can return to PickABook
I would like to be able to log in and out
```

#### Get Started

Follow these steps to get started with the application:

* Clone the repo
* `cd` in to the folder, open the application and run `mix deps.get` to install Phoenix dependencies
* Run `npm install` to install node dependencies
* Run `mix ecto.create` and `mix ecto.migrate` to create and setup the database
* Run `mix phx.server` to run the application
* You are now running on localhost 4000!
